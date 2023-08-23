import React from 'react'
import './LoginPage.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

function LoginPage() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
       <div className='LoginNavbar'>TOP/ ログイン</div>
       <div className='LoginPage1'>ログイン</div>
       <div className='LoginPage2'>
        <div className='LoginPage2-1'>
        <h3>会員ログイン</h3>
        <span>オンラインサイトでの登録がお済みのお客様</span><br />
        <div className='LoginPage2-1-2'>
        <div>
          
        </div>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <div className='EmailLogin'>
        <div className='EmailLogin1'>
          メールアドレス
          </div>
        <div className='EmailLogin2'>
        <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>次回からメールアドレスの入力を省略する</Checkbox>
        </Form.Item>
        </div>
          
      
      </div>
      <div className='PasswordLogin'>
        <div className='PasswordLogin1'>パスワード</div>
        <div className='PasswordLogin2'><Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <a className="login-form-forgot" href="">
      パスワードをお忘れの方はこちら
        </a>
      </div>
      </div>
      
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        
      </Form.Item>
    </Form>
        </div>
        </div>
        <div className='LoginPage2-2'>
          <h3>初めてログインされるお客様</h3>
          <span>店舗で発行された会員カードをお持ちで</span><br />
          <span>オンラインサイトでの登録がお済みではないお客様</span><br />
          <div className='RegitersButton'>新規会員登録</div>
          <span>会員カードをお持ちでないお客様は、</span><br />
          <span>ご注文のタイミングで会員登録が可能です</span><br />
          <span>引き続きお買い物をお楽しみください</span>

        

        </div>
       </div>
       


    </div>
  )
}

export default LoginPage