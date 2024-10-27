"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

  function generatePriceValues(){
    let price = []
    for(let i = 1; i <= 100; i++){
        price.push(i * 100);
    }
    return price;
  }

  type FormValues = {
    address:string;
    styles:string;
    minPrice:string;
    maxPrice:string;
  };


export function SearchForm() {

    const form = useForm<FormValues>({
        defaultValues: {
            address: ""
        },
    });

    const prices = generatePriceValues();
    function formSubmitHandler(data:any){
        console.log(data);
    }
    return (
        <Form {...form}>
            <form className="p-2 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-end bg-background rounded" onSubmit={form.handleSubmit(formSubmitHandler)}>
            <FormField
             control={form.control}
              name="address"
             render={({ field }) => {  
                return (
                <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl className="w-[180px]">
                        <Input placeholder="Search by Address" {...field} />
                    </FormControl>
                </FormItem>
                );
             }} 
         />

<FormField
             control={form.control}
              name="styles"
             render={({ field }) => {
                return (
                    <FormItem>
                        <FormLabel>Styles</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Styles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bridal Mehndi design">Bridal Mehndi design</SelectItem>
                      <SelectItem value="Floral Mehndi design">Floral Mehndi design</SelectItem>
                      <SelectItem value="Arabic Mehndi design">Arabic Mehndi design</SelectItem>
                      <SelectItem value="Indian Mehndi design">Indian Mehndi design</SelectItem>
                      <SelectItem value="Tatto Mehndi design">Tatto Mehndi design</SelectItem>
                      <SelectItem value="Moroccan Mehndi design">Moroccan Mehndi design</SelectItem>
                      <SelectItem value="Western Mehndi design">Western Mehndi design</SelectItem>
                      <SelectItem value="Party Mehndi design">Party Mehndi design</SelectItem>
                      <SelectItem value="Pakistani Mehndi design">Pakistani Mehndi design</SelectItem>
                      <SelectItem value="Minimalistic Abstract Mehndi design">Minimalistic Abstract Mehndi design</SelectItem>
                      <SelectItem value="Mesh Finger  Mehndi design">Mesh Finger  Mehndi design</SelectItem>
                    </SelectContent>
                  </Select>
                  </FormItem>
                );
             }} 
         />

<FormField
             control={form.control}
              name="minPrice"
             render={({ field }) => {
                return (
                    <FormItem>
                        <FormLabel>Min. price</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Min. price" />
                    </SelectTrigger>
                    <SelectContent>
                    {prices.map((price) => (
                       <SelectItem key={price} value={price.toString()}>
                        {price}
                       </SelectItem>
                    ))}
                    </SelectContent>
                  </Select>
                  </FormItem>
                );
             }} 
         />

<FormField
             control={form.control}
              name="maxPrice"
             render={({ field }) => {
                return (
                    <FormItem>
                        <FormLabel>Max. price</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Max. price" />
                    </SelectTrigger>
                    <SelectContent>
                    {prices.map((price) => (
                       <SelectItem key={price} value={price.toString()}>
                        {price}
                       </SelectItem>
                    ))}
                    </SelectContent>
                  </Select>
                  </FormItem>
                );
             }} 
         />
         <button className="col-start-[1] col-end-[-1] bg-black text-white">Search</button>

            </form>
        </Form>
    );
}