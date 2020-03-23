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
        <i class="el-icon-folder-add" style="font-size:28px"></i>
      </p>
    </el-header>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="序号" width="150"></el-table-column>
        <el-table-column label="名称" width="120">
          <template scope="scope">
            <el-input v-show="scope.row.edit" size="small" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.edit">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="类型" width="120">
          <template scope="scope">
            <el-input v-show="scope.row.edit" size="small" v-model="scope.row.province"></el-input>
            <span v-show="!scope.row.edit">{{ scope.row.province }}</span>
          </template>
        </el-table-column>
        <el-table-column label="地址" width="300">
          <template scope="scope">
            <el-input v-show="scope.row.edit" size="small" v-model="scope.row.address"></el-input>
            <span v-show="!scope.row.edit">{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              v-show="!scope.row.edit"
              type="primary"
              @click="scope.row.edit=true"
              size="small"
              icon="edit"
            >编辑</el-button>
            <el-button
              v-show="scope.row.edit"
              type="success"
              @click="scope.row.edit=false"
              size="small"
              icon="check"
            >完成</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="card" v-if="false">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>菜单新增/编辑</span>
          <i class="el-icon-circle-close" style="fon-size:18px"></i>
        </div>

        <p>
          名称:
          <el-input size="small" style="width:400px" v-model="list.name"></el-input>
        </p>

        <p v-if="type==1">
          网址: <el-input v-model='list.site' style="width:400px"></el-input>
        </p>
        <p v-if="type==2">
           文件:
        </p>
        <p>

        </p>
      </el-card>
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
                <el-option autocomplete="off"
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
            <!-- :data="upLoadData" -->
            <el-upload class="avatar-uploader"
            action="111"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          </el-form-item>
           <!-- <el-form-item label="分类名" label-width="7.5rem">
          </el-form-item> -->

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
      formTitle: '编辑', // 表单标题
      dialogFormVisible: true, // 对话框是否可见
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
      edit: true,
      type: 1,
      list: {
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
        site: '',
        updata: ''
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          edit: true
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          edit: false
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          edit: false
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          edit: false
        }
      ]
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      let _this = this
      _this.form.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      let fd = new FormData()
      fd.append('file', file)// 传文件
      // fd.append('srid',this.upLoadData.srid);//传其他参数
      //   axios.post('/api/up/file', fd).then(function (res) {
      //     console.log('成功')
      //   })
      return false// 屏蔽了action的默认上传
    },
    sureFormSubmit () {
      let _this = this
      let api = ''
      _this.axios.post(api, {}).then(res => { console.log(res) })
    }
  }
}
</script>
