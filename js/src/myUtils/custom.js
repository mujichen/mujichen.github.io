function createCopyBtns() {
	var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '  <i class="fa fa-globe"></i><span>copy</span>';
    copyHtml += '</button>';
    $(".highlight .code pre").before(copyHtml);
	$('.btn-copy').mouseout(function(){
    	$('.btn-copy span').text('copy');
    });
    let clipboard = new ClipboardJS('.btn-copy', {
        target: function(trigger) {
			$('.btn-copy span').text(' OK ');
            return trigger.nextElementSibling;
        }
    });
	//复制成功事件绑定
	clipboard.on('success',
		function(e) {
			//清除内容被选择状态
			e.clearSelection();
			
		});
	//复制失败绑定事件
	clipboard.on('error',
		function(e) {
			// console.error('Action:', e.action);
			// console.error('Trigger:', e.trigger);
			console.error("copy error")
	});
}
function clearMenuBr(){
	$('.menu-item-icon').next().remove();
}
//页面载入完成后，创建复制按钮
$(document).ready(function() {
  createCopyBtns();
  //移除菜单栏换行标签
  setTimeout(clearMenuBr,5);
});