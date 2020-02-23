isFound = 0;
function selectByNameLocation(targetName, targetLocation) {
    console.log("[ARGS] ", targetName, targetLocation);
    table = document.getElementById("grid_ggkc_1");
    while (table == null) {
        console.log("looping...");
        table = document.getElementsByTagName('frame')[0].contentWindow.document;
        table = table.getElementById("grid_ggkc_1");
    }
    table = table.getElementsByTagName("tbody");
    tr = table[0].getElementsByTagName("tr");
    // table = document.getElementsByTagName("tbody");
    // tr = table[4].getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        className = tr[i].getElementsByTagName("td")[1].innerHTML.substring(0, targetName.length);
        if (className == targetName) {
            classLocation = tr[i].getElementsByTagName("td")[6].innerHTML;
            console.log("[CHECK] ", classLocation);
            if (classLocation == targetLocation) {
                console.log("FIND");
                isFound = 1;
                console.log("[ACT] Click SELECT");
                // console.log("link: ", tr[i].getElementsByTagName("td")[9].getElementsByTagName('a')[0]);
                tr[i].getElementsByTagName("td")[9].getElementsByTagName('a')[0].click();
                ensureButton = document.getElementsByTagName("button");
                while (ensureButton == null) {
                    ensureButton = document.getElementsByTagName('frame')[0].contentWindow.document;
                    ensureButton = ensureButton.getElementsByTagName("button");
                }
                for (var j = 0; j < ensureButton.length; j++) {
                    ensureOrCancel = ensureButton[j].innerHTML;
                    if (ensureOrCancel == "确定") {
                        console.log("[ACT] Click ENSURE");
                        ensureButton[j].click();
                        break;
                    }
                }
            }
        }
        if (isFound == 1) {
            break;
        }
    }
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


myTargetName = "中国特色社会主义理论与实践研究";
myTargetLocation = "邯郸校区";

timeOut = prompt("Set timeout (Second):");
count = 0
current = location.href;

if (timeOut > 0) {
    setTimeout('reload()', 1000 * timeOut);
} else {
    location.replace(current);
}

function reload() {
    this.selectByNameLocation(myTargetName, myTargetLocation);
    sleep(3000);
    if (isFound == 0) {
        myTargetLocation = "张江校区";
        setTimeout('reload()', 1000 * timeOut);
    } else {
        return ;
    }
    count++;
    console.log('每（'+timeOut+'）秒自动刷新, 刷新次数：' + count);
    fr4me='<frameset cols=\'*\'>\n<frame src=\''+current+'\'/>';
    fr4me+='</frameset>';
    with(document){
        write(fr4me);
        void(close())
    };
}