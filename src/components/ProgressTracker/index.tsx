'use client';
import styles from './styles.module.scss';

export interface ProgressStep {
    name: string;
    value: number;
}

export interface ProgressTrackerProps {
    current_step_value: number;
    steps: Array<ProgressStep>;
}

export default function ProgressTracker({
    fields,
}: {
    fields: ProgressTrackerProps;
}) {
    return (
        <div className={styles.ProgressTracker}>
            {fields.steps.map((step) => (
                <div key={step.name}
                    className={`${styles.ProgressTracker__Item} ${fields.current_step_value === step.value ? styles.ProgressTracker__ItemSelected : ""}`}
                >
                    <p className={`${styles.ProgressTracker__ItemValue} heading-3`}>{step.value}</p>
                    <p className={`${styles.ProgressTracker__ItemName} heading-5`}>{step.name}</p>
                </div>
            ))}
        </div>
    );
}