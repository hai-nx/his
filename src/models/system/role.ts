interface Role {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  inactive?: boolean;
  sortOrder?: number;
  isDefault?: boolean;
}

export default Role;
