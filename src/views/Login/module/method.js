export const submitForm = formRef => {
  if (!formRef) 
return;
  formRef.validate(valid => {
    if (valid) 
      return true;
     else 
      return false;
    
  });
};

export const resetForm = formRef => {
  if (!formRef) 
return;
  formRef.resetFields();
};
