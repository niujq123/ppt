<template>
  <div>
    <el-header style="line-height: 60px;background-color: #B3C0D1;
            color: #333;">
      <p
        style="display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1000px;
            margin: 0 auto;"
      >
        菜单列表
        <i
          class="el-icon-folder-add"
          style="font-size:28px"
          @click="formTitle='添加';dialogFormVisible=true"
        ></i>
      </p>
    </el-header>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed label="序号" width="150">
          <template slot-scope="scope">{{scope.$index+1}}</template>
        </el-table-column>
        <el-table-column label="名称" width="120">
          <template scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="类型" width="120">
          <template scope="scope">
            <span>{{ scope.row.suffix }}</span>
          </template>
        </el-table-column>
        <el-table-column label="地址" width="300">
          <template scope="scope">
            <span>{{ scope.row.path }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="primary" @click="compile(scope.row)" size="small" icon="edit">编辑</el-button>
            <el-button type="danger" size="small" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 弹框 -->
    <div class="dialog">
      <el-dialog :title="formTitle" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="名称" label-width="7.5rem">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="路径" label-width="7.5rem">
            <el-select v-model="type" placeholder="请选择" style="width:100%">
              <el-option
                autocomplete="off"
                v-for="item in form.type"
                :key="item.value"
                :label="item.value"
                :value="item.type"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="路径" label-width="7.5rem" v-if="type==1">
            <el-input v-model="form.site" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="请选择文件" label-width="7.5rem" v-if="type==2">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-change="handleChange"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="sureFormSubmit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<style lang="less">
.table {
  width: 1000px;
  margin: 50px auto 0;
}
.card {
  width: 600px;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -300px;
  z-index: 1000;
}
.clearfix {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
export default {
  data () {
    return {
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      formTitle: '编辑', // 表单标题
      dialogFormVisible: false, // 对话框是否可见
      form: {
        path: '',
        name: '',
        type: [
          {
            value: '网页',
            type: 1
          },
          {
            value: 'world/ppt',
            type: 2
          }
        ],
        site: ''
      },
      type: 1,
      tableData: []
    }
  },
  created () {
    this.$getFN({
      type: 'post',
      url: '/wfDocument/list'
    }).then(res => {
      this.tableData = res.result
    })
  },
  methods: {
    compile (item) {
      this.formTitle = '编辑'
      this.dialogFormVisible = true
      this.form.path = item.path
      this.form.name = item.name
      if (item.suffix !== 'html') {
        this.type = 2
      } else {
        this.type = 1
      }
    },
    handleRemove (file, fileList) {
      // console.log(file, fileList)
    },
    handlePreview (file) {
      // console.log(file)
    },
    handleChange (file, fileList) {
      // console.log(fileList)
    },
    del (item) {
      this.$getFN({
        type: 'post',
        url: '/wfDocument/delete',
        params: { id: item.id }
      }).then(res => {
        if (res.e_msg === 'success') {
          this.$alert('删除成功', '', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${action}`
              })
            }
          })
        }
      })
    },
    handleAvatarSuccess (res, file) {
      let _this = this
      _this.form.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      let fd = new FormData()
      fd.append('file', file) // 传文件
      // fd.append('srid',this.upLoadData.srid);//传其他参数
      //   axios.post('/api/up/file', fd).then(function (res) {
      //   })
      return false // 屏蔽了action的默认上传
    },
    sureFormSubmit () {
      // let _this = this
      // let api = ''
    }
  }
}
</script>
