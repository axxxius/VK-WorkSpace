import { useEffect, useState } from 'react';

interface UseQueryOptions<Data> {
  onSuccess?: (data: Data) => void;
  onError?: (error: Error) => void;
  enabled?: boolean;
}

interface UseQueryReturn<Data> {
  data: Data | null;
  error: Error | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  refetch: () => void;
}

export const useQuery = <Data>(callback: () => Promise<Data>, options?: UseQueryOptions<Data>) => {
  const enabled = options?.enabled ?? true;

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const request = () => {
    setIsLoading(true);

    callback()
      .then((response) => {
        options?.onSuccess?.(response);
        setData(response);
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);
        setError(null);
      })
      .catch((error) => {
        options?.onError?.(error);
        setData(null);
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);
        setError(error);
      });
  };

  useEffect(() => {
    if (!enabled) return;
    request();
  }, [enabled]);

  return {
    data,
    error,
    isLoading,
    isSuccess,
    isError,
    refetch: request
  } as UseQueryReturn<Data>;
};
