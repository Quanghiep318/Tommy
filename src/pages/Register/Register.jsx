import {React, useState } from 'react'
import './Register.css'
import {
  Button,
  Checkbox,
  Form,
  Input,
  DatePicker,
  Select,
} from 'antd';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Register() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+84</Option>
        
      </Select>
    </Form.Item>
  );
  
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div>
      <div className='RegisterNavbar'>TOP/ ログイン</div>
       <div className='RegisterPage1'>新規会員登録</div>
       <div className='RegisterPage2'>
       <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
     
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="メール"
        rules={[
          {
            type: 'email',
            message: '入力された電子メールは無効です。',
          },
          {
            required: true,
            message: 'メールアドレスを入力してください。',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="パスワード"
        rules={[
          {
            required: true,
            message: 'パスワードを入力してください。',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="パスワード認証"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'パスワードを確認してください。',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="名前"
        
        rules={[
          {
            required: true,
            message: 'あなたの名前を入力してください！',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="常居所"
        rules={[
          {
            required: true,
            message: '居住地を入力てください。',
            whitespace: true,
          },
        ]}
      >
       <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="電話番号"
        rules={[
          {
            required: true,
            message: '電話番号を入力してください!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
      name="birthday"
      label="誕生日"
      rules={[
        {
          required: true,
          message: '誕生日を選択してください!',
        },
      ]}>
        <DatePicker style={{
            width: '100%',
          }}/>
      </Form.Item>
      

      

      <Form.Item
        name="gender"
        label="性別"
        rules={[
          {
            required: true,
            message: '性別を選択してください!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">男</Option>
          <Option value="female">女</Option>
          <Option value="other">他</Option>
        </Select>
      </Form.Item>

      

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
        はい、オファーやスタイルアップデート、セールやイベントへの特別招待の受信を希望します。
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
        登録
        </Button>
      </Form.Item>
    </Form>
     <div className='RegisterPage2-2'><img src="https://japan.tommy.com/assets/images/member/card.png" alt="" />
     <img src="https://japan.tommy.com/assets/images/mytommy/mytommy.png" alt="" /></div>
     
       </div>

    </div>
  )
}

export default Register