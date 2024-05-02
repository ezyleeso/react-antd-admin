import { useForm, Store } from "sunflower-antd";
import { Form, Input, Select } from "antd";
import { useSearchForm } from "../../hooks/useSearchForm";
import SearchFormContainer from "../../components/SearchFormContainer";

export default function ExampleForm() {
  const [form] = Form.useForm();

  const { defaultFormValues, syncFormValuesWithUrlParams } = useSearchForm({
    username: "",
    email: "",
    userType: "general",
  });

  const submit = (values: Store) => {
    syncFormValuesWithUrlParams(values);

    // api 통신
    console.log("--- api 통신 ---");
  };

  const { formProps } = useForm({
    form,
    submit,
    defaultFormValues,
  });

  return (
    <SearchFormContainer formId="form-ex" onReset={() => form.resetFields()}>
      <Form
        id="form-ex"
        name="form-ex"
        onFinish={submit}
        {...formProps}
        layout="vertical"
      >
        <Form.Item label="회원이름" name="username">
          <Input name="username" />
        </Form.Item>

        <Form.Item
          label="이메일"
          name="email"
          rules={[
            { message: "이메일 형식을 올바르게 입력하세요.", type: "email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="회원유형" name="userType">
          <Select placeholder="회원유형">
            <Select.Option value="general">일반회원</Select.Option>
            <Select.Option value="special">특수회원</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </SearchFormContainer>
  );
}
