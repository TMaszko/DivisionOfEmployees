import React from 'react'
import FormSection from "../FormSection";
import Header from "../Header/Header"
import ContentItem from "../Content/ContentItem/ContentItem";
import Content from "../Content/Content";
import Label from "../../Fields/Label/Label";
import Field from "../../Fields/Field/Field";
import Input from "../../Fields/Input/Input";
import ErrorMessage from "../../FormError/ErrorMessage/ErrorMessage";
import ShortInput from "../../Fields/Input/ShortInput/ShortInput";
import Select from "../../Fields/Select/Select";
import Checkbox from "../../Fields/Checkbox/Checkbox";

const NewEmployeeSection = ({
                                getInput,
                                getNumberInput,
                                values,
                                getErrors,
                                numberOfTeams
                            }) => {
    const TEAMS_IDs = Array.from({length: numberOfTeams}, (v, k) => ({id: k + 1}));

    return (
        <FormSection>
            <Header headerName="Dodaj nowego pracownika"/>
            <Content>
                <ContentItem>
                    <Label
                        errors={[getErrors(values.firstName)]}
                        required
                        name='firstName'>
                        Imię
                    </Label>
                    <Field>
                        <Input
                            error={getErrors(values.firstName)}
                            required
                            name='firstName'
                            onChange={getInput}
                            currentValue={values.firstName.value}
                            type="text"
                            placeholder={"Imię "}/>
                    </Field>
                    <ErrorMessage
                        error={getErrors(values.firstName)}
                        name='imie'/>
                </ContentItem>
                <ContentItem>
                    <Label
                        errors={[getErrors(values.lastName)]}
                        required
                        name='lastName'>
                        Nazwisko
                    </Label>
                    <Field>
                        <Input
                            error={getErrors(values.lastName)}
                            required
                            name='lastName'
                            onChange={getInput}
                            currentValue={values.lastName.value}
                            type="text"
                            placeholder={"Nazwisko"}/>
                    </Field>
                    <ErrorMessage
                        error={getErrors(values.lastName)}
                        name='nazwisko'/>
                </ContentItem>

                <ContentItem>
                    <Label name='age'
                           required
                           errors={[getErrors(values.age)]}>
                        Wiek
                    </Label>
                    <Field>
                        <ShortInput
                            error={getErrors(values.age)}
                            required
                            name='age'
                            type="text"
                            placeholder={'Wiek'}
                            value={values.age.value}
                            onChange={getNumberInput}/>
                    </Field>
                    <ErrorMessage
                        error={getErrors(values.age)}
                        name='wiek'/>
                </ContentItem>
                <ContentItem>
                    <Label
                        errors={[getErrors(values.city)]}
                        required
                        name='city'>
                        Miasto
                    </Label>
                    <Field>
                        <Input
                            error={getErrors(values.city)}
                            required
                            name='city'
                            onChange={getInput}
                            currentValue={values.city.value}
                            type="text"
                            placeholder={"Miasto"}/>
                    </Field>
                    <ErrorMessage
                        error={getErrors(values.city)}
                        name='miasto'/>
                </ContentItem>
                <ContentItem>
                    <Label
                        errors={[getErrors(values.district)]}
                        required
                        name='district'>
                        Dzielnica
                    </Label>
                    <Field>
                        <Input
                            error={getErrors(values.district)}
                            required
                            name='district'
                            onChange={getInput}
                            currentValue={values.district.value}
                            type="text"
                            placeholder={"Dzielnica"}/>
                    </Field>
                    <ErrorMessage
                        error={getErrors(values.district)}
                        name='dzielnica'/>
                </ContentItem>
                <ContentItem>
                    <Label name='teamNumber'>
                        Numer zespołu
                    </Label>
                    <Field>
                        <Select options={TEAMS_IDs}
                                name='teamNumber'
                                value={values.teamNumber.value}
                                onChange={getInput}/>
                    </Field>
                </ContentItem>
                <ContentItem>
                    <Label name='defectOfVision'>
                        Wada wzroku
                    </Label>
                    <Field>
                       <Checkbox
                           labelText={"F"}
                           id={'defectOfVision'}
                           name={'defectOfVision'}
                           onChange={getInput}/>
                    </Field>
                </ContentItem>
            </Content>
        </FormSection>
    );
};


export default NewEmployeeSection;