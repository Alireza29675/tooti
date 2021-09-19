<template>
  <div class="session-record">
    <el-card class="session-record__form-wrapper">
      <h3 class="session-record__title">ضبط جلسه جدید</h3>
      <el-form
        ref="recordForm"
        :model="recordForm"
        :rules="rules"
        label-width="110px"
      >
        <el-form-item label="عنوان" prop="title">
          <el-input placeholder="جستجوی آخرین ماشین‌های فروشی شیراز در دیوار" v-model="recordForm.title" />
        </el-form-item>
        <el-form-item label="آدرس شروع" prop="url">
          <el-input :input-style="{ direction: 'ltr' }" placeholder="http://divar.ir" v-model="recordForm.url" />
        </el-form-item>
        <div class="session-record__submit">
          <el-button type="primary" @click="submitForm">شروع ضبط جلسه</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { requiredWithMessage, urlWithMessage } from '@@/common/validationRules'

export default {
  name: 'SessionRecord',
  data() {
    return {
      recordForm: {
        title: '',
        url: '',
      },
    }
  },
  computed: {
    rules() {
      return {
        title: [requiredWithMessage()],
        url: [requiredWithMessage(), urlWithMessage()],
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs['recordForm'].validate((valid) => {
        if (valid) {
          alert('submit!')
        }
      })
    },
  },
}
</script>

<style lang="scss">
.session-record {
  &__title {
    font-size: 1.2rem;
  }

  &__form-wrapper {
    width: 500px;
    margin: 0 auto;
  }

  &__submit {
    text-align: center;
    margin-bottom: 1.5rem;
  }
}
</style>