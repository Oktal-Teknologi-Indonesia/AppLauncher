// button1
document.getElementById('btn1').addEventListener('click', () => {
    console.log('Buka Index App Target');
    window.plugins.launcher.launch({
        packageName: 'id.oktal.target'
    },function(data) {
        console.log('Successfully launched app target');
    }, function(err) {
        console.error('Error launching app target: ' + err);
    });
})

// button2
document.getElementById('btn2').addEventListener('click', () => {
    // cek apakah uri tgt dikenali dan bisa dibuka
    window.plugins.launcher.canLaunch(
        {uri:"tgt://"},
        function(){
            console.log("URI tgt dikenali");
            window.plugins.launcher.launch(
                {
                    uri: "tgt://promo.html"
                },
                function(){
                    console.log("Membuka tgt://promo.html")
                },
                function(errMsg){
                    console.log("tidak bisa membuka tgt://promo.html.",errMsg);
                }
            )
        },
        function(errMsg){
            console.log("URI tgt tidak dikenali",errMsg);
        }
    );
})