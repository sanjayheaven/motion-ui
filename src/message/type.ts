/** when content is a function type, expost those props outside for use */

import { ReactNode } from "react";

export interface IContentFunctionProps {
  close?: () => void;
}

export interface IMessageConfig {
  /** content of the message */
  content?: ReactNode | (({ close }: IContentFunctionProps) => ReactNode);
  /** time for message exist. Won't exit is set to zero */
  duration?: number;
  /** callback when a message item is clicked */
  onClick?: () => void;
  /** callback when a message item is closed */
  onClose?: () => void;
  /** unique key for each message*/
  key?: string;
  /** distance from the top for each message item */
  top?: number;
}
