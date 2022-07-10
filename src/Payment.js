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