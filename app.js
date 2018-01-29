var app = angular.module('MyApp', [])
app.controller('MyController', function ($scope, $window,$timeout,$document) {

    $scope.width = null;
    $scope.length = null;
    $scope.totalMovesReqd=0;
    $scope.totalMoves = 0;
    $scope.widthArr=[]
    $scope.lengthArr=[]
    while($scope.width==null){
    $scope.width = $window.prompt("Enter the width"
    );
}
    while($scope.length==null){
    $scope.length = $window.prompt("Enter the length");
    }

    while($scope.totalMovesReqd==0){
        $scope.totalMovesReqd = $window.prompt("Enter the total moves required");
        }
    

    for (var i = 0; i <= $scope.width; i += 1) {
        $scope.widthArr.push(i);
    }
    $scope.widthArr.pop();
    for (var i = 0; i <= $scope.length; i += 1) {
        $scope.lengthArr.push(i);
    }

    $scope.lengthArr.pop();



    $scope.addElement = function(){
        
        // for(i = 0;i<$scope.length;i++){
        //     for(j=0;j<$scope.width;j++){
        //         var newEle = angular.element("<div id= class='red'></div>");
        //         var target = document.getElementById('target');
        //         angular.element(target).append(newEle);

        //     }

        //     lineEle = angular.element("<br class = 'empty'>");
        //     angular.element(target).append(lineEle);
            

        // }


        
        
        
        noOfG = $scope.width*$scope.length/5;
        for(i=0;i<noOfG;i++){
            console.log("in the loop");
            $scope.rand1Wid = Math.floor(Math.random()*$scope.width);
            $scope.rand1Len = Math.floor(Math.random()*$scope.length);
            var id = document.getElementById('len-'+$scope.rand1Len + '-wid-' + $scope.rand1Wid);
           
            var gImg = angular.element("<img class='gImg' src='g.png'></img>");
            angular.element(id).append(gImg);
        }
        $scope.randWid = Math.floor(Math.random()*$scope.width);
        $scope.randLen = Math.floor(Math.random()*$scope.length);

        var marioImg = angular.element("<img id='marioImg' src='mario.png'></img>");
        
        var id = document.getElementById('len-'+$scope.randLen + '-wid-' + $scope.randWid);
        //var id = document.getElementById('len0wid0')
        //console.log("check child")
        //console.log(angular.element(id).children);
        
        //angular.element(id).remove();
        angular.element(id).empty();
        angular.element(id).append(marioImg);
        


        $document.bind('keyup',function(e){

            console.log(e);
            if(e.key == "ArrowUp"){
                console.log("up arrow");
                var marioImg = document.getElementById('marioImg');
                var parent = angular.element(marioImg).parent();
                arr = parent[0].id.split('-');
                $scope.currentLen = arr[1];
                $scope.currentWid = arr[3];
                //console.log(currentLen,currentWid);
                if(parseInt($scope.currentLen)>0){
                    $scope.currentLen=parseInt($scope.currentLen)-1;
                    //parent.removeChild(marioImg);
                    marioImg.remove();
                    console.log('len'+$scope.currentLen + 'wid' + $scope.currentWid);
                    var new_id = document.getElementById('len-'+$scope.currentLen + '-wid-' + $scope.currentWid);
                    var newmarioImg = angular.element("<img id='marioImg' src='mario.png'></img>");
                    angular.element(new_id).empty();
                    angular.element(new_id).append(newmarioImg);
                    console.log("aded")

                }
            }
            else if(e.key == "ArrowDown"){
                console.log("down arrow");
                var marioImg = document.getElementById('marioImg');
                var parent = angular.element(marioImg).parent();
                arr = parent[0].id.split('-');
                $scope.currentLen = arr[1];
                $scope.currentWid = arr[3];
                //console.log(currentLen,currentWid);
                if(parseInt($scope.currentLen)<$scope.length-1){

                    $scope.currentLen=parseInt($scope.currentLen)+ 1;
                    //parent.removeChild(marioImg);
                    marioImg.remove();
                    console.log('len'+$scope.currentLen + 'wid' + $scope.currentWid);
                    var new_id = document.getElementById('len-'+$scope.currentLen + '-wid-' + $scope.currentWid);
                    var newmarioImg = angular.element("<img id='marioImg' src='mario.png'></img>");
                    angular.element(new_id).empty();
                    angular.element(new_id).append(newmarioImg);
                    console.log("aded")

                }

            }
            else if(e.key == "ArrowLeft"){

                console.log("down arrow");
                var marioImg = document.getElementById('marioImg');
                var parent = angular.element(marioImg).parent();
                console.log(parent[0])
                arr = parent[0].id.split('-');
                $scope.currentLen = arr[1];
                $scope.currentWid = arr[3];
                //$scope.currentLen = parent[0].id.charAt(3);
                //$scope.currentWid = parent[0].id.charAt(7);
                //console.log(currentLen,currentWid);
                if(parseInt($scope.currentWid)>0){

                    $scope.currentWid=parseInt($scope.currentWid)- 1;
                    //parent.removeChild(marioImg);
                    marioImg.remove();
                    console.log('len'+$scope.currentLen + 'wid' + $scope.currentWid);
                    var new_id = document.getElementById('len-'+$scope.currentLen + '-wid-' + $scope.currentWid);
                    var newmarioImg = angular.element("<img id='marioImg' src='mario.png'></img>");
                    angular.element(new_id).empty();
                    angular.element(new_id).append(newmarioImg);
                    console.log("aded")

                }
                
            }
            else if(e.key == "ArrowRight"){

                console.log("down arrow");
                var marioImg = document.getElementById('marioImg');
                var parent = angular.element(marioImg).parent();
                arr = parent[0].id.split('-');
                $scope.currentLen = arr[1];
                $scope.currentWid = arr[3];
                //console.log(currentLen,currentWid);
                if(parseInt($scope.currentWid)<$scope.width-1){

                    $scope.currentWid=parseInt($scope.currentWid)+ 1;
                    //parent.removeChild(marioImg);
                    marioImg.remove();
                    console.log('len'+$scope.currentLen + 'wid' + $scope.currentWid);
                    var new_id = document.getElementById('len-'+$scope.currentLen + '-wid-' + $scope.currentWid);
                    var newmarioImg = angular.element("<img id='marioImg' src='mario.png'></img>");
                    angular.element(new_id).empty();
                    angular.element(new_id).append(newmarioImg);
                    console.log("aded")

                }
                
            }

            if( document.getElementsByClassName("gImg").length==0){
                $scope.result = "You Won";
                $window.alert("You won");
                $scope.totalMoves=0;
                $document.unbind('keyup');
            };

            if($scope.totalMoves==$scope.totalMovesReqd){
                $window.alert("Game over. Total Moves were"+ $scope.totalMoves);
                $document.unbind('keyup');
            }

            $scope.totalMoves +=1;
        })
        
    }

    $timeout(function(){
        $scope.addElement();
    },1000);
    




    // $scope.ShowAlert = function () {
    //     if (typeof ($scope.Name) == "undefined" || $scope.Name == "") {
    //         $window.alert("Please enter your name!");
    //         return;
    //     }
    //     $window.alert("Hello " + $scope.Name);
    // }
});