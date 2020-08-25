var that;
class Tab {
	constructor(id) {
		/* 获取元素 */
		that = this;
		this.main = document.querySelector(id);
		this.add = this.main.querySelector('.tabadd');
		/* li的元素 */
		this.ul = this.main.querySelector('.fisrstnav ul:first-child');
		/* section父元素 */
		this.fsection = this.main.querySelector('.tabscon');
		this.init();
	}
	init() {
		/* 初始化重新获取li和section */
		this.updateNode();
		/* init 初始化操作让相关的元素绑定事件 */
		this.add.onclick = this.addTab;
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].index = i;
			this.lis[i].onclick = this.toggleTab;
			this.remove[i].onclick = this.removeTab;
		}
	}
	/* 动态获取所有的li和section */
	updateNode() {
		this.lis = this.main.querySelectorAll('li');
		this.sections = this.main.querySelectorAll('section');
		this.remove = this.main.querySelectorAll('.icon-guanbi');
	}
	/* 1.切换功能 */
	toggleTab() {
		that.clearClass();
		this.className = 'liactive';
		that.sections[this.index].className = 'conactive';
	}
	/* 清楚所有li和section的类 */
	clearClass() {
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].className = '';
			this.sections[i].className = '';
		}
	}
	/* 2.添加功能 */
	addTab() {
		that.clearClass();
		/* 创建li元素和section元素 */
		var li = `<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>`;
		var section = `<section class="conactive">测试1</section>`;
		/* 把创建的两个元上都追加到父元素里边 */
		that.ul.insertAdjacentHTML('beforeend', li);
		that.fsection.insertAdjacentHTML('beforeend', section);
		that.init();
	}
	/* 3.删除功能 */
	removeTab(e) {
		e.stopPropagation(); //阻止冒泡 不触发li的切换事件
		var index = this.parentNode.index;
		/* 根据索引号删除对应的li和section remove()方法可以删除指定的元素 */
		that.lis[index].remove();
		that.sections[index].remove();
		that.init();
		/* 当删除的不是选中状态 则选中的li保持不变 */
		if (document.querySelector('.liactive')) return;
		/* 当删除选中状态的li 让他的前一个li处于选中状态 */
		index--;
		// 如果 that.lis[index] 为真 则执行后边的点击事件
		that.lis[index] && that.lis[index].click(); // 手动调用点击事件 不需要鼠标触发
	}
	/* 4.修改功能 */
	editTab() {}
}

var tab = new Tab('#tab');
