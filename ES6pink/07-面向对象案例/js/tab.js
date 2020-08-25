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
		}
	}
	/* 获取所有的li和section */
	updateNode() {
		this.lis = this.main.querySelectorAll('li');
		this.sections = this.main.querySelectorAll('section');
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
	removeTab() {}
	/* 4.修改功能 */
	editTab() {}
}

var tab = new Tab('#tab');
