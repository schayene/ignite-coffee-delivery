import { CheckoutContainer, CheckoutForm } from "./styles";
import { DeliveryAddress } from "./components/DeliveryAddress";
import { Payment } from "./components/Payment";
import { OrderSummary } from "./components/OrderSummary";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const formValidationSchema = zod.object({
  payment_type: zod.string(),
  postal_code: zod
    .string()
    .min(1, { message: "Informe um CEP!" })
    .regex(/^\d{5}-\d{3}/g, "Informe um CEP válido!"),
  // .length(8, "Informe um CEP válido!"),
  street: zod.string({
    required_error: "Informe uma rua!",
  }),
  number: zod.string(),
  district: zod.string(),
  complement: zod.string().nullable(),
  city: zod.string(),
  uf: zod.string().toUpperCase(),
});

type FormData = zod.infer<typeof formValidationSchema>;

export function Checkout() {
  const { resetCart } = useContext(CartContext);

  const form = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      payment_type: "",
      postal_code: "",
      street: "",
      number: "",
      district: "",
      complement: "",
      city: "",
      uf: "",
    },
  });
  const { handleSubmit, reset } = form;

  const navigate = useNavigate();

  function onSubmit(data: FormData) {
    sessionStorage.setItem(
      "@coffee-delivery:order-details",
      JSON.stringify(data)
    );

    resetCart();
    reset();
    navigate("/success", { state: data });
  }

  return (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Complete seu pedido</h2>
          <FormProvider {...form}>
            <DeliveryAddress />
            <Payment />
          </FormProvider>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <OrderSummary />
        </div>
      </CheckoutForm>
    </CheckoutContainer>
  );
}
