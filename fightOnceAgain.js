function selectByNameLocation(targetName, targetLocation) {
    table = document.getElementById("grid_ggkc_1").getElementsByTagName("tbody");
    tr = table[0].getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        className = tr[i].getElementsByTagName("td")[1].innerHTML.substring(0, targetName.length);
        if (className == targetName) {
            classLocation = tr[i].getElementsByTagName("td")[6].innerHTML;
            if (classLocation == targetLocation) {
                tr[i].getElementsByTagName("td")[9].getElementsByTagName('a')[0].click();
                ensureButton = document.getElementsByTagName("button");
                for (var j = 0; j < ensureButton.length; j++) {
                    ensureOrCancel = ensureButton[j].innerHTML;
                    if (ensureOrCancel == "确定") {
                        // alert("find");
                        ensureButton[j].click();
                        break;
                    }
                }
                break;
            }
        }
    }
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

myTargetName = "中国特色社会主义理论与实践研究";
myTargetLocation = "邯郸校区";
// selectByNameLocation(myTargetName, myTargetLocation);

timeOut = prompt("Set timeout (Second):");
count = 0
current = location.href;

if (timeOut > 0) {
    setTimeout('reload()', 1000 * timeOut);
} else {
    location.replace(current);
}

function reload() {
    selectByNameLocation(myTargetName, myTargetLocation);
    setTimeout('reload()', 1000 * timeOut);
    count++;
    console.log('每（'+timeOut+'）秒自动刷新, 刷新次数：' + count);
    fr4me='<frameset cols=\'*\'>\n<frame src=\''+current+'\'/>';
    fr4me+='</frameset>';
    with(document){
        write(fr4me);
        void(close())
    };

    // sleep(2000);
    // selectByNameLocation(myTargetName, myTargetLocation);
}