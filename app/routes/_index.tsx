import { useFieldArray, useForm } from "react-hook-form";
import { createValidate, type tags } from "typia";

import { Form, FormControl, FormField } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { typiaResolver } from "~/lib/typia.resolver";

interface FieldArray {
  links: { url: string & tags.Format<"url"> }[];
}

const validateFieldArray = createValidate<FieldArray>();

export default function Index() {
  const form = useForm<FieldArray>({
    resolver: typiaResolver(validateFieldArray),
    defaultValues: {
      links: [{ url: "" }],
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "links",
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((v) => console.log(v))}>
        {fields.map((field, index) => (
          <FormField
            control={form.control}
            key={field.id}
            name={`links.${index}.url`}
            render={({ field }) => (
              <FormControl>
                <Input {...field} />
              </FormControl>
            )}
          />
        ))}
      </form>
    </Form>
  );
}
