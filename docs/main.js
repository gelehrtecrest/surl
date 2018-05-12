$(function(){
	var url = location.href;
	var query = location.search;
	if(query.slice(1) != ""){
		location.href=inflate(query.slice(1));
	}
	$('#url').keyup(function() {
		var input_url = $('#url').val();
		$("#shorturl").val(url + '?' + deflate(input_url));
	});
});

function clipboadCopy(string){
	var urltext = document.getElementById(string);
	urltext.select();
	document.execCommand("copy");
	alert("コピーしました");
}

// 圧縮関数
function deflate(val) {
    val = encodeURIComponent(val);
    val = RawDeflate.deflate(val);
    val = btoa(val); // base64エンコード
    return val;
}

// 復号関数
function inflate(val) {
    val = atob(val); // base64デコード
    val = RawDeflate.inflate(val);
    val = decodeURIComponent(val);
    return val;
}
