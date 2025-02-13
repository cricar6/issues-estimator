'use client';

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
        <div>
            <p>{fields.current_step_value}</p>

            {fields.steps.map((step) => (
                <p key={step.name}>{step.name} {step.value}</p>
            ))}
        </div>
    );
}