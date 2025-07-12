export const Requester = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  const urlWithApiKey = `${process.env.NEXT_PUBLIC_ABR_API_BASE_URL}${url}?apikey=${
    process.env.NEXT_PUBLIC_ABR_API_KEY
  }`;

  const response = await fetch(urlWithApiKey, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json() as Promise<T>;
  } else {
    return response.text() as unknown as Promise<T>;
  }
};
