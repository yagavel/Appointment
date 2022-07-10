import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';
import { Button, Checkbox, Form, Input, Anchor,Modal} from 'antd';
const { useState } = React;
const { Link } = Anchor;

const onFinish = (values) => {
  alert('Payment Completed Successfully');
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const tabListNoTitle = [
    {
        key: 'Card',
        tab: 'Credit / Debit Card',
    },
    {
        key: 'upi',
        tab: 'UPI / QR',
    },
    {
        key: 'Wallet',
        tab: 'Wallet',
    },
    {
        key: 'netbanking',
        tab: 'Net Banking',
    },
];

const contentListNoTitle = {
    netbanking: <Anchor affix={true} showInkInFixed={true} offsetTop={30}>
        <Link href="https://netbanking.hdfcbank.com/netbanking/" target="_blank" title="HDFC" />
        <Link href="https://yesonline.yesbank.co.in/index.html?module=login" target="_blank" title="YES Bank" />
        <Link href="https://www.indianbank.net.in/jsp/startIB.jsp" target="_blank" title="Indian Bank" />
    </Anchor>,
    upi: 'fdfdfd',
    Wallet: 'fdfd',
    Card: <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        initialValues={{
            savecard: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="Card Hold Name"
            name="card_holder_name"
            placeholder="Card Holder Name"
            rules={[
                {
                    required: true,
                    message: 'Please Enter Card Holder Name',
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Card Number"
            name="card_number"
            rules={[
                {
                    required: true,
                    message: 'Please Enter Card Number',
                },
            ]}
        >
            <Input maxLength="16"/>
        </Form.Item>
        <Form.Item
            label="Expire Date & CVV"
            style={{
                marginBottom: 0
            }}
        >
            <Form.Item
                name="year"
                rules={[
                    {
                        required: true,
                        message: 'Please Enter Expire Date'
                    }
                ]}
                style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)"
                }}
            >
                <Input placeholder="MM/YY" maxLength="5" />
            </Form.Item>
            <Form.Item
                name="month"
                rules={[
                    {
                        required: true,
                        message: 'Please Enter CVV'
                    }
                ]}
                style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                    margin: "0 8px"
                }}
            >
                <Input placeholder="CVV" maxlength="3" type="number" />
            </Form.Item>
            <Checkbox>Save Card</Checkbox>
            <Form.Item
                name="savecard"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
            </Form.Item>
            <Button type="primary" htmlType="submit">
                Confirm Appointment
            </Button>
        </Form.Item>
    </Form>
    ,
};

const Payment = () => {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const [activeTabKey2, setActiveTabKey2] = useState('Card');

    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };

    const onTab2Change = (key) => {
        setActiveTabKey2(key);
    };

    return (
        <>
            <div style={{
                marginLeft: '25%',
                marginTop: '100px',
                width: '50%',
            }}
            >
                <h3>Choose Payment Method</h3>
                <br />
                <Card
                    tabList={tabListNoTitle}
                    activeTabKey={activeTabKey2}
                    onTabChange={(key) => {
                        onTab2Change(key);
                    }}
                >
                    {contentListNoTitle[activeTabKey2]}
                </Card>

            </div>
        </>
    );
};

export default Payment;