Page({
  data: {
    name: 'world',
  },
  onLoad() {
    my.getExtConfig({
      success: (res) => {
        this.setData({
          name: res.data.name || '***',
        });
      },
      fail: (error) => {
        my.alert({
          title: 'fail',
          content: JSON.stringify(error),
        });
        console.log('error', error);
      },
      complete: () => {
        console.log('get ext config complete');
      }
    });
  }
});