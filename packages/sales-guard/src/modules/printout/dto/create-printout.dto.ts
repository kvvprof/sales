import { z } from 'zod';

import { Kinds } from '@/modules/printout/enums/kinds.enum';

export const CreatePrintoutDto = z.object({
  id: z.number().int().positive(),
  kind: z.nativeEnum(Kinds),
});
