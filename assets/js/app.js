const { createApp } = Vue
    
createApp({
  data() {
    return {
      message: 'AUCATION System!',
      title:"AUCATION System",
      description:"ยินดีต้อนรับ เข้าสู่ระบบ ประมูล  รูปแบบใหม่ ง่าย รวดเร็ว สะดวก ปลอดภัย",
      buttonx:'<a href="../examples/" class="btn btn-primary btn-lg px-4">เข้าสู่ระบบ</a>'

    }
  }
}).mount('#app')