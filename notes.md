trackPageView() {
    dataLayer.push({
      'event': 'pageview',
      'page_path': '/example-page',
      'value': 'eta'
    });
    console.log('eta');
  }