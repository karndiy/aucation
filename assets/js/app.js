const { createApp } = Vue
    
createApp({
  data() {
    return {
      message: 'AUCATION System!',
      title:"AUCATION System",
      description:"ยินดีต้อนรับ เข้าสู่ระบบ ประมูล  รูปแบบใหม่ ง่าย รวดเร็ว สะดวก ปลอดภัย",
      buttonx:'<a href="../m" class="btn btn-primary btn-lg px-4">เข้าสู่ระบบ</a>',

      items:[
        {id:1,p_name:"รายการ 1",img_url:"https://www.pccchon.ac.th/group/images/product-06.jpg",price:2500,view:100,act:1},
        {id:2,p_name:"รายการ 2",img_url:"https://www.pccchon.ac.th/group/images/product-05.jpg",price:500,view:10,act:0},
        {id:3,p_name:"รายการ 3",img_url:"https://www.pccchon.ac.th/group/images/product-03.jpg",price:5500,view:300,act:1}
      ]

    }
  }
}).mount('#app')