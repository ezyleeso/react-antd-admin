import { Store } from "sunflower-antd";
import { useSearchParams } from "react-router-dom";

export const useSearchForm = (params: Store) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // form submit 함수에서 사용.
  // 유효성검사를 통과한 후 formValues와 url params를 동기화 시키는 함수
  const syncFormValuesWithUrlParams = (formValues: Store) => {
    for (const key in formValues) {
      searchParams.set(key, String(formValues[key]));
    }

    setSearchParams(searchParams);
  };

  const defaultFormValues: Store = {};
  // defaultFormValues 값 우선 순위
  // 1. url params
  // 2. 훅의 params 매개변수
  for (const key in params) {
    defaultFormValues[key] = searchParams.get(key) || params[key] || "";
  }

  return {
    defaultFormValues,
    syncFormValuesWithUrlParams,
  };
};
