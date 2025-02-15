'use client';
import Icon, { IconProps } from '@/app/icons';
import styles from './styles.module.scss';
import { ReactNode } from 'react';

export interface TextBoxProps {
    icon?: IconProps;
    title?: string;
    body?: string;
    alert?: ReactNode
}

export default function TextBox({
    fields,
}: {
    fields: TextBoxProps;
}) {
    return (
        <div className={styles.TextBox}>
            {fields.icon &&
                <div className={styles.TextBox__Icon}>
                    <Icon name={fields.icon.name} size={fields.icon.size} />
                </div>
            }
            {fields.title && <p className={`${styles.TextBox__Title} body-large`}>{fields.title}</p>}
            {fields.body && <p className={`${styles.TextBox__Body} body`}>{fields.body}</p>}
            {fields.alert && <div className={`${styles.TextBox__Alert}`}>{fields.alert}</div>}
        </div>
    );
}