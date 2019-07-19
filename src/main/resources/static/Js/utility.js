
 /**
  *@param  �������Ҫȡ��������KEYֵ String����
  ���� 'www.baidu.com/s?params=����'
  ���������ź��params���룬���Ի�õȺź��ֵ
  *@return   ����һ��String�ַ���
  */
 //url ȡ����
 function GetQueryString(name){
     var rReg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");    //����һ��������ʽ����
     var oaUrl = window.location.search.substr(1).match(rReg);  //ƥ���������
     if( oaUrl !=null ){                  //���ز���
         return  decodeURI(oaUrl[2])
     }
     return null;                      //û�в鵽����null
 }

 //��װ�пշ���
 function isEmpty(res){
     if(res == ""|| res==null || res ==undefined){
         return false;
     }else{
         return true;
     }
 }



 //��װ�ж�תnumber

 function strsplit(data){
     var strarray = data.split(",");
     var array = new Array();
     for(var i =0 ; i<strarray.length;i++){
          array.push( Number(strarray[i]));
     }
     return array;
 }

 // //获取当前页面url中的参数
 // function getUrlParam() {
 //     var url = document.location.toString();
 //     var arrObj = url.split("?");
 //     var result = {};
 //     if (arrObj.length > 1) {
 //         var arrPara = arrObj[1].split("&");
 //         var arr;
 //         for (var i = 0; i < arrPara.length; i++) {
 //             arr = arrPara[i].split("=");
 //             result[arr[0]] = arr[1];
 //         }
 //     }
 //     return result;
 // }