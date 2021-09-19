export const urlWithMessage = (message = 'یک آدرس با فرمت صحیح وارد کنید') => (
  {
    type: 'url',
    message,
    trigger: 'blur',
  }
)

export const requiredWithMessage = (message = 'وارد کردن این فیلد الزامیست') => ({
  required: true,
  message,
  trigger: 'blur',
})