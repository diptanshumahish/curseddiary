export interface ServerProps<P extends string, S = {}> {
  params: {
    [Poperty in P]: string;
  };
  searchParams: S;
}
