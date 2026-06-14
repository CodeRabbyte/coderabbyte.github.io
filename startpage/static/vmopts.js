function openVMPanel(up_pn, lw_pn) {
    up_pn.style = "height: 125px;";
    lw_pn.style = 'height: 75px; top: 0px;';
    up_pn.ariaLabel="opened";
}

function closeVMPanel(up_pn, lw_pn) {
    up_pn.style = "height: 100%;";
    lw_pn.style = 'height: 0px; top: -75px;';
    up_pn.ariaLabel="closed"
}


function closeVMPanelByName(name) {
    console.log(name + "_panel")
    var up_pn = document.getElementById(name + "_panel").parentNode.parentNode.getElementsByClassName(['upper_panel'])[0];
    var lw_pn = document.getElementById(name + "_panel").parentNode.parentNode.getElementsByClassName(['lower_panel'])[0];
    closeVMPanel(up_pn, lw_pn)
}

window.onload = function(){ 
    const btns = document.getElementsByClassName('upper_panel_btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = function click(e) {
            var up_pn = e.target.parentNode.parentNode.parentNode.getElementsByClassName(['upper_panel'])[0];
            var lw_pn = e.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(['lower_panel'])[0];
            if (up_pn.ariaLabel=="closed")
            {
                openVMPanel(up_pn, lw_pn)
            }
            else
            {
                closeVMPanel(up_pn, lw_pn)
            }
        }
    }
};

