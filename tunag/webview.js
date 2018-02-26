module.exports = (Franz, options) => {
  const getUnreads = () => {
    // TODO: Notification badge not found...
    // const e = $('.badge--notification');
		// if (e) {
		// 	Franz.setBadge(Number(e.text()));
		// } else {
		// 	Franz.setBadge(0)
		// }
  };

  Franz.loop(getUnreads);
};
