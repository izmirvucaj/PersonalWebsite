import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Modal } from 'antd';
import Message from "../../assets/images/contact-img.svg";

const { TextArea } = Input;

function AppContact() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    showModal();
    form.resetFields(); // Form alanlarını temizler
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div id="contact" className="block contactBlock">
      <div className="contentHolder">
        <div className="left">
          <img src={Message} alt="Contact" width={750} />
        </div>
        <div className="right">
          <div className="titleHolder">
            <h2>Get in Touch</h2>
            <p>Feel free to email us anytime for collaborations and communication</p>
          </div>
          <Form
            form={form} // Form kontrolünü form nesnesine bağlar
            name="contact_form"
            className="contact-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  name="fullname"
                  rules={[{ required: true, message: 'Please enter your full name!' }]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  name="telephone"
                >
                  <Input placeholder="Telephone" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="subject"
                >
                  <Input placeholder="Subject" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="message"
            >
              <TextArea placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                noStyle
                rules={[
                  { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                ]}
              >
                <Checkbox>I agree with terms and conditions.</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Modal
            centered
            visible={isModalVisible}
            onCancel={closeModal}
            footer={[
              <Button key="close" type="primary" onClick={closeModal}>
                Close
              </Button>
            ]}
            closable={false}
            wrapClassName="backdrop-backdrop-filter"
          >
            <h2 style={{ textAlign: "center" }}>Sent Successfully!</h2>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default AppContact;
