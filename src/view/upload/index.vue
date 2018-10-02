<template>
  <div>
    <h1>上传图片demo</h1>
    <input type="file"
          multiple
          id="file"
          @change="onFileChange" />
    <div v-for="img in images" :key="img">
      <img :src="img" width="100" height="100" /><br>
    </div>
    <button type="submit"
            @click="upload">upload</button>
    <h3>{{result}}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: null,
      formData: null,
      images: [],
      result: '',
    }
  },
  methods: {
    upload() {
      this.formData = new FormData()
      for (let file of this.files) {
        this.formData.append("file", file)
      }
      this.http.post('http://localhost:3001/upload', this.formData).then(res => {
        this.result = res.data.result
        if (res.data.code === '0') {
          this.files = []
          this.images = []
          let fileDOM = document.getElementById('file')
          fileDOM.value = ''
        }
      })
    },
    onFileChange(e) {
      this.files = e.target.files || e.dataTransfer.files
      if (!this.files.length) return
      for (let img of this.files) {
        this.createImage(img)
      }
    },
    createImage(file, index) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.images.push(e.target.result)
      }
      reader.readAsDataURL(file)
    },
  },
}
</script>
<style lang="stylus" scoped>
</style>