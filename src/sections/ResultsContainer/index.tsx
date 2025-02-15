'use client';

import { useQuestionContext } from "@/app/providers/QuestionProvider";
import styles from './styles.module.scss';
import TextBox from "@/components/TextBox";

export default function ResultsContainer() {
    const {
        categoryList,
        pointsResult,
        currentIssue,
    } = useQuestionContext();

    const uncertaintyCategory = categoryList.find((category) => category.name.toLowerCase() === 'uncertainty');
    const riskCategory = categoryList.find((category) => category.name.toLowerCase() === 'risk');
    const complexityCategory = categoryList.find((category) => category.name.toLowerCase() === 'complexity');

    if (pointsResult) {
        return (
            <div>
                <div className={styles.ResultsContainer}>
                    <div className={styles.ResultsContainer__ContainerTopLeft}>
                        <TextBox fields={{
                            title: currentIssue.name
                        }} />
                    </div>
                    <div className={styles.ResultsContainer__ContainerTopRight}>
                        <p className="body-large">{pointsResult?.value}</p>
                        <p className="body">{pointsResult?.description}</p>
                    </div>
                    <div className={styles.ResultsContainer__ContainerBotLeft}>
                        <TextBox fields={{
                            title: `${uncertaintyCategory?.overall_quality as string} ${uncertaintyCategory?.name as string}`,
                            icon: {
                                name: uncertaintyCategory?.icon_name as string
                            },
                            body: uncertaintyCategory?.description as string,
                            alert: complexityCategory?.overall_quality === 'High' ?
                            <p className="body">
                                <b>WARNING! High Uncertainty</b> Are you sure you dont need a spike to reduce uncertainty
                            </p> :
                            undefined,
                        }} />
                    </div>
                    <div className={styles.ResultsContainer__ContainerBotCenter}>
                        <TextBox fields={{
                            title: `${riskCategory?.overall_quality as string} ${riskCategory?.name as string}`,
                            icon: {
                                name: riskCategory?.icon_name as string
                            },
                            body: riskCategory?.description as string
                        }} />
                    </div>
                    <div className={styles.ResultsContainer__ContainerBotRight}>
                        <TextBox fields={{
                            title: `${complexityCategory?.overall_quality as string} ${complexityCategory?.name as string}`,
                            icon: {
                                name: complexityCategory?.icon_name as string
                            },
                            body: complexityCategory?.description as string,
                            alert: complexityCategory?.overall_quality === 'High' ?
                                <p className="body">
                                    <b>WARNING! High Complexity</b> Are you sure its not complex enough to divide it in other features
                                </p> :
                                undefined,
                        }} />
                    </div>
                </div>
            </div>
        );
    }

    return <div> You'll be redirected </div>
}