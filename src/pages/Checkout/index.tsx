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
  payment_type: zod
    .enum(["credit_card", "debit_card", "money", ""])
    .refine((value) => ["credit_card", "debit_card", "money"].includes(value), {
      message: "Selecione uma forma de pagamento!",
    }),
  postal_code: zod
    .string()
    .min(1, { message: "Informe um CEP!" })
    .regex(/^\d{5}-\d{3}/g, "Informe um CEP válido!"),
  street: zod.string().min(1, { message: "Informe uma rua!" }),
  number: zod.string().min(1, { message: "Informe um número!" }),
  district: zod.string().min(1, { message: "Informe um bairro!" }),
  complement: zod.string().nullable(),
  city: zod.string().min(1, { message: "Informe uma cidade!" }),
  uf: zod.string().min(1, { message: "Informe um UF!" }),
});

type FormData = zod.infer<typeof formValidationSchema>;

export function Checkout() {
  const { cart, resetCart } = useContext(CartContext);

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
      {cart.items.length ? (
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
      ) : (
        <p>Seu carrinho está vazio!</p>
      )}
    </CheckoutContainer>
  );
}
