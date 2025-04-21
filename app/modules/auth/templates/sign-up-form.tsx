import { AtSignIcon, UserIcon } from "lucide-react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { authClient } from "~/lib/auth.client";
import { typiaResolver } from "~/lib/typia.resolver";

import { IconInput } from "@auth/components/icon-input";
import { PasswordInput } from "@auth/components/password-input";
import {
  signUpRequestErrors,
  validateSignUpRequest,
  type SignUpRequest,
} from "@auth/pipes/sign-up.pipe";
import { Checkbox } from "~/components/ui/checkbox";

export function SignUpForm() {
  const form = useForm<SignUpRequest>({
    resolver: typiaResolver(validateSignUpRequest, signUpRequestErrors),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    (v: SignUpRequest) =>
      authClient.signUp.email({
        email: v.email,
        name: v.name,
        password: v.password,
        callbackURL: "/auth/sign-up",
      }),
    [],
  );

  return (
    <Form {...form}>
      <form
        className="space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only font-semibold">Full Name</FormLabel>
              <FormControl>
                <IconInput
                  icon={UserIcon}
                  placeholder="Name"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only font-semibold">Email</FormLabel>
              <FormControl>
                <IconInput
                  icon={AtSignIcon}
                  placeholder="Email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only font-semibold">Password</FormLabel>
              <FormControl>
                <PasswordInput
                  className="placeholder:text-sm"
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="accept"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-y-0 py-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-muted-foreground">
                Accept terms and conditions
              </FormLabel>
            </FormItem>
          )}
        />

        <Button
          className="w-full font-bold"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
