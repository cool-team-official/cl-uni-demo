<script>
export default {
	onLaunch: function() {
		console.log("App Launch");
	},
	onShow: function() {
		console.log("App Show");
	},
	onHide: function() {
		console.log("App Hide");
	}
};
</script>

<style lang="scss">
@import "./static/css/index.scss";
@import "cl-uni/index.scss";
page {
	background-color: #f7f7f7;
}
</style>
