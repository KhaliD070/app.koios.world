import * as React from "react";
import { IFormContext, FormContext } from "./Form";


/* The available editors for the field */
type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface IFieldProps {
  /* The unique field name */
  id: string;

  /* The label text for the field */
  label?: string;

  /* The editor for the field */
  editor?: Editor;

  /* The drop down items for the field */
  options?: string[];

  /* The field value */
  value?: any;
}

export const Field: React.SFC<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value
}) => {
return (
    <FormContext.Consumer>
      {(context: IFormContext) => (
        <div className="form-group">
          



          {editor! === "multilinetextbox" && (
            <textarea
              id={id}
              value={value}
              onChange={
                (e: React.FormEvent<HTMLTextAreaElement>) =>
                  context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={
                (e: React.FormEvent<HTMLTextAreaElement>) =>
                  console.log() /* TODO: validate field value */
              }
              className="form-control"
            />
          )}



          
        </div>
      )}
    </FormContext.Consumer>
);
                }


// Field.defaultProps = {
//   editor: "textbox"
// };

// export default Field;