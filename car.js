$(function() {
	getSum()
	$(".checkall").change(function() {
		var flag = $(this).prop("checked")
		$(".j-checkbox, .checkall").prop("checked", flag)
		if ($('checkall').prop('checked')) {
			$('.cart-item').addClass('check-cart-item')
		}else{
			$('.cart-item').removeClass('check-cart-item')
		}
	
		getSum()
	})

	$('.j-checkbox').change(function(){
		if ($('.j-checkbox:checked').lenfth==$('.j-checkbox').length) {
			$('.checkall').prop('checked',true)
		}else{
			$('.checkall').prop('checked',false)
		}
		if($(this).prop('checked')){
			$(this).parents('.cart-item').addClass('check-cart-item')
		}else{
			$(this).parents('.cart-item').removeClass('check-cart-item')
		}
		getSum()
	})


	$('.increment').click(function() {
		var n = $(this).siblings('input').val()
		n++
		$(this).siblings('input').val(n)
		var p = $(this).parents('.p-num').siblings('.p-price').text()
		p = parseFloat(p.substr(1))
		var total = "￥" + (n * p).toFixed(2)
		$(this).parents('.p-num').siblings('.p-sum').text(total)
		getSum()
	})
	$('.decrement').click(function() {
		var n = $(this).siblings('input').val()
		if (n == 1) {
			return false
		}
		n--
		$(this).siblings('input').val(n)
		var p = $(this).parents('.p-num').siblings('.p-price').text()
		p = parseFloat(p.substr(1))
		var total = "￥" + (n * p).toFixed(2)
		$(this).parents('.p-num').siblings('.p-sum').text(total)
		getSum()
	})
	$('.itxt').change(function() {
		var n = $(this).val()
		var p = $(this).parents('.p-num').siblings('.p-price').text()
		p = parseFloat(p.substr(1))
		var total = "￥" + (n * p).toFixed(2)
		$(this).parents('.p-num').siblings('.p-sum').text(total)
		getSum()
	})
	function getSum(){
		var sum=0
		var money=0
		var objs=$('.j-checkbox:checked').parents('.cart-item').find('.itxt')
		objs.each(function(i,ele){
			var n=parseInt($(ele).val())
			sum+=n
		})
		$('.amount-sum em').text(sum)
		var pobjs=$('.j-checkbox:checked').parents('.cart-item').find('.p-sum')
		pobjs.each(function(i,ele){
			var p=$(ele).text()
			p=parseFloat(p.substr(1))
			money+=p
		})
		$('.price-sum em').text("￥"+money.toFixed(2))
	}
	$('.p-action a').click(function(){
		$(this).parents('.cart-item').remove()
		getSum()
	})
	$('.remove-batch').click(function(){
		$('.j-checkbox:checked').parents('.cart-item').remove()
		getSum()
	})
	$('.clear-all').click(function(){
		$('.cart-item').remove()
		getSum()
	})
})
