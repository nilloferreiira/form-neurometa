import { z } from 'zod'

export const appointmentSchema = z.object({
    date: z.date({
      message: 'Selecione uma data!'
    }),
    time: z.string({
      message: 'Selecione um horário!'
    }),
  });
  
  export type AppointmentSchema = z.infer<typeof appointmentSchema>;