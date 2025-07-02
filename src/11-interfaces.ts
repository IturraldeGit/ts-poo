interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(): boolean;
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    console.log('Connected to Postgres');
  }

  disconnect(): void {
    console.log('Disconnected from Postgres');
  }

  isConnected(): boolean {
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    console.log('Connected to Oracle');
  }

  disconnect(): void {
    console.log('Disconnected from Oracle');
  }

  isConnected(): boolean {
    return true;
  }
}