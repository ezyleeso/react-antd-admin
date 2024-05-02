import { ReactNode } from "react";
import { Button, Flex } from "antd";
import styles from "../styles/SearchFormContainer.module.css";

interface Props {
  children: ReactNode;
  formId: string;
  onReset: () => void;
}

export default function SearchFormContainer({
  children,
  formId,
  onReset,
}: Props) {
  return (
    <div className={styles.serachFormContainer}>
      {children}

      <Flex gap={10} justify="flex-end">
        <Button onClick={onReset}>Reset</Button>

        <Button form={formId} type="primary" htmlType="submit">
          Search
        </Button>
      </Flex>
    </div>
  );
}
