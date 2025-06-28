
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Pengguna
 * 
 */
export type Pengguna = $Result.DefaultSelection<Prisma.$PenggunaPayload>
/**
 * Model Mahasiswa
 * 
 */
export type Mahasiswa = $Result.DefaultSelection<Prisma.$MahasiswaPayload>
/**
 * Model Dosen
 * 
 */
export type Dosen = $Result.DefaultSelection<Prisma.$DosenPayload>
/**
 * Model Logbook
 * 
 */
export type Logbook = $Result.DefaultSelection<Prisma.$LogbookPayload>
/**
 * Model RiwayatPerubahanPembimbing
 * 
 */
export type RiwayatPerubahanPembimbing = $Result.DefaultSelection<Prisma.$RiwayatPerubahanPembimbingPayload>
/**
 * Model Kegiatan
 * 
 */
export type Kegiatan = $Result.DefaultSelection<Prisma.$KegiatanPayload>
/**
 * Model MataKuliah
 * 
 */
export type MataKuliah = $Result.DefaultSelection<Prisma.$MataKuliahPayload>
/**
 * Model Lampiran
 * 
 */
export type Lampiran = $Result.DefaultSelection<Prisma.$LampiranPayload>
/**
 * Model PermohonanBimbingan
 * 
 */
export type PermohonanBimbingan = $Result.DefaultSelection<Prisma.$PermohonanBimbinganPayload>
/**
 * Model Notifikasi
 * 
 */
export type Notifikasi = $Result.DefaultSelection<Prisma.$NotifikasiPayload>
/**
 * Model ProgramStudi
 * 
 */
export type ProgramStudi = $Result.DefaultSelection<Prisma.$ProgramStudiPayload>
/**
 * Model ProgramStudiField
 * 
 */
export type ProgramStudiField = $Result.DefaultSelection<Prisma.$ProgramStudiFieldPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Penggunas
 * const penggunas = await prisma.pengguna.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Penggunas
   * const penggunas = await prisma.pengguna.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pengguna`: Exposes CRUD operations for the **Pengguna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penggunas
    * const penggunas = await prisma.pengguna.findMany()
    * ```
    */
  get pengguna(): Prisma.PenggunaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **Mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.MahasiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dosen`: Exposes CRUD operations for the **Dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.DosenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logbook`: Exposes CRUD operations for the **Logbook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logbooks
    * const logbooks = await prisma.logbook.findMany()
    * ```
    */
  get logbook(): Prisma.LogbookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riwayatPerubahanPembimbing`: Exposes CRUD operations for the **RiwayatPerubahanPembimbing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiwayatPerubahanPembimbings
    * const riwayatPerubahanPembimbings = await prisma.riwayatPerubahanPembimbing.findMany()
    * ```
    */
  get riwayatPerubahanPembimbing(): Prisma.RiwayatPerubahanPembimbingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kegiatan`: Exposes CRUD operations for the **Kegiatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kegiatans
    * const kegiatans = await prisma.kegiatan.findMany()
    * ```
    */
  get kegiatan(): Prisma.KegiatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mataKuliah`: Exposes CRUD operations for the **MataKuliah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MataKuliahs
    * const mataKuliahs = await prisma.mataKuliah.findMany()
    * ```
    */
  get mataKuliah(): Prisma.MataKuliahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lampiran`: Exposes CRUD operations for the **Lampiran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lampirans
    * const lampirans = await prisma.lampiran.findMany()
    * ```
    */
  get lampiran(): Prisma.LampiranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permohonanBimbingan`: Exposes CRUD operations for the **PermohonanBimbingan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermohonanBimbingans
    * const permohonanBimbingans = await prisma.permohonanBimbingan.findMany()
    * ```
    */
  get permohonanBimbingan(): Prisma.PermohonanBimbinganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifikasi`: Exposes CRUD operations for the **Notifikasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifikasis
    * const notifikasis = await prisma.notifikasi.findMany()
    * ```
    */
  get notifikasi(): Prisma.NotifikasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programStudi`: Exposes CRUD operations for the **ProgramStudi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramStudis
    * const programStudis = await prisma.programStudi.findMany()
    * ```
    */
  get programStudi(): Prisma.ProgramStudiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programStudiField`: Exposes CRUD operations for the **ProgramStudiField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramStudiFields
    * const programStudiFields = await prisma.programStudiField.findMany()
    * ```
    */
  get programStudiField(): Prisma.ProgramStudiFieldDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Pengguna: 'Pengguna',
    Mahasiswa: 'Mahasiswa',
    Dosen: 'Dosen',
    Logbook: 'Logbook',
    RiwayatPerubahanPembimbing: 'RiwayatPerubahanPembimbing',
    Kegiatan: 'Kegiatan',
    MataKuliah: 'MataKuliah',
    Lampiran: 'Lampiran',
    PermohonanBimbingan: 'PermohonanBimbingan',
    Notifikasi: 'Notifikasi',
    ProgramStudi: 'ProgramStudi',
    ProgramStudiField: 'ProgramStudiField'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pengguna" | "mahasiswa" | "dosen" | "logbook" | "riwayatPerubahanPembimbing" | "kegiatan" | "mataKuliah" | "lampiran" | "permohonanBimbingan" | "notifikasi" | "programStudi" | "programStudiField"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pengguna: {
        payload: Prisma.$PenggunaPayload<ExtArgs>
        fields: Prisma.PenggunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenggunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenggunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          findFirst: {
            args: Prisma.PenggunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenggunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          findMany: {
            args: Prisma.PenggunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>[]
          }
          create: {
            args: Prisma.PenggunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          createMany: {
            args: Prisma.PenggunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PenggunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          update: {
            args: Prisma.PenggunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          deleteMany: {
            args: Prisma.PenggunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenggunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PenggunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          aggregate: {
            args: Prisma.PenggunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengguna>
          }
          groupBy: {
            args: Prisma.PenggunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenggunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenggunaCountArgs<ExtArgs>
            result: $Utils.Optional<PenggunaCountAggregateOutputType> | number
          }
        }
      }
      Mahasiswa: {
        payload: Prisma.$MahasiswaPayload<ExtArgs>
        fields: Prisma.MahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findFirst: {
            args: Prisma.MahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findMany: {
            args: Prisma.MahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          create: {
            args: Prisma.MahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          createMany: {
            args: Prisma.MahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          update: {
            args: Prisma.MahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.MahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.MahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      Dosen: {
        payload: Prisma.$DosenPayload<ExtArgs>
        fields: Prisma.DosenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DosenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DosenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          findFirst: {
            args: Prisma.DosenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DosenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          findMany: {
            args: Prisma.DosenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>[]
          }
          create: {
            args: Prisma.DosenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          createMany: {
            args: Prisma.DosenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DosenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          update: {
            args: Prisma.DosenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          deleteMany: {
            args: Prisma.DosenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DosenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DosenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          aggregate: {
            args: Prisma.DosenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDosen>
          }
          groupBy: {
            args: Prisma.DosenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DosenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DosenCountArgs<ExtArgs>
            result: $Utils.Optional<DosenCountAggregateOutputType> | number
          }
        }
      }
      Logbook: {
        payload: Prisma.$LogbookPayload<ExtArgs>
        fields: Prisma.LogbookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogbookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogbookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          findFirst: {
            args: Prisma.LogbookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogbookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          findMany: {
            args: Prisma.LogbookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>[]
          }
          create: {
            args: Prisma.LogbookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          createMany: {
            args: Prisma.LogbookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LogbookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          update: {
            args: Prisma.LogbookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          deleteMany: {
            args: Prisma.LogbookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogbookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogbookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogbookPayload>
          }
          aggregate: {
            args: Prisma.LogbookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogbook>
          }
          groupBy: {
            args: Prisma.LogbookGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogbookGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogbookCountArgs<ExtArgs>
            result: $Utils.Optional<LogbookCountAggregateOutputType> | number
          }
        }
      }
      RiwayatPerubahanPembimbing: {
        payload: Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>
        fields: Prisma.RiwayatPerubahanPembimbingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiwayatPerubahanPembimbingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiwayatPerubahanPembimbingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiwayatPerubahanPembimbingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiwayatPerubahanPembimbingPayload>
          }
          findFirst: {
            args: Prisma.RiwayatPerubahanPembimbingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiwayatPerubahanPembimbingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiwayatPerubahanPembimbingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiwayatPerubahanPembimbingPayload>
          }
          findMany: {
            args: Prisma.RiwayatPerubahanPembimbingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiwayatPerubahanPembimbingPayload>[]
          }
          create: {
            args: Prisma.RiwayatPerubahanPembimbingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiwayatPerubahanPembimbingPayload>
          }
          createMany: {
            args: Prisma.RiwayatPerubahanPembimbingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RiwayatPerubahanPembimbingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiwayatPerubahanPembimbingPayload>
          }
          update: {
            args: Prisma.RiwayatPerubahanPembimbingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiwayatPerubahanPembimbingPayload>
          }
          deleteMany: {
            args: Prisma.RiwayatPerubahanPembimbingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiwayatPerubahanPembimbingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RiwayatPerubahanPembimbingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiwayatPerubahanPembimbingPayload>
          }
          aggregate: {
            args: Prisma.RiwayatPerubahanPembimbingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiwayatPerubahanPembimbing>
          }
          groupBy: {
            args: Prisma.RiwayatPerubahanPembimbingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiwayatPerubahanPembimbingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiwayatPerubahanPembimbingCountArgs<ExtArgs>
            result: $Utils.Optional<RiwayatPerubahanPembimbingCountAggregateOutputType> | number
          }
        }
      }
      Kegiatan: {
        payload: Prisma.$KegiatanPayload<ExtArgs>
        fields: Prisma.KegiatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KegiatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KegiatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          findFirst: {
            args: Prisma.KegiatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KegiatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          findMany: {
            args: Prisma.KegiatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>[]
          }
          create: {
            args: Prisma.KegiatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          createMany: {
            args: Prisma.KegiatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KegiatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          update: {
            args: Prisma.KegiatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          deleteMany: {
            args: Prisma.KegiatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KegiatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KegiatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          aggregate: {
            args: Prisma.KegiatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKegiatan>
          }
          groupBy: {
            args: Prisma.KegiatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KegiatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.KegiatanCountArgs<ExtArgs>
            result: $Utils.Optional<KegiatanCountAggregateOutputType> | number
          }
        }
      }
      MataKuliah: {
        payload: Prisma.$MataKuliahPayload<ExtArgs>
        fields: Prisma.MataKuliahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MataKuliahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataKuliahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MataKuliahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataKuliahPayload>
          }
          findFirst: {
            args: Prisma.MataKuliahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataKuliahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MataKuliahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataKuliahPayload>
          }
          findMany: {
            args: Prisma.MataKuliahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataKuliahPayload>[]
          }
          create: {
            args: Prisma.MataKuliahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataKuliahPayload>
          }
          createMany: {
            args: Prisma.MataKuliahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MataKuliahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataKuliahPayload>
          }
          update: {
            args: Prisma.MataKuliahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataKuliahPayload>
          }
          deleteMany: {
            args: Prisma.MataKuliahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MataKuliahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MataKuliahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataKuliahPayload>
          }
          aggregate: {
            args: Prisma.MataKuliahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMataKuliah>
          }
          groupBy: {
            args: Prisma.MataKuliahGroupByArgs<ExtArgs>
            result: $Utils.Optional<MataKuliahGroupByOutputType>[]
          }
          count: {
            args: Prisma.MataKuliahCountArgs<ExtArgs>
            result: $Utils.Optional<MataKuliahCountAggregateOutputType> | number
          }
        }
      }
      Lampiran: {
        payload: Prisma.$LampiranPayload<ExtArgs>
        fields: Prisma.LampiranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LampiranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampiranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LampiranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampiranPayload>
          }
          findFirst: {
            args: Prisma.LampiranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampiranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LampiranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampiranPayload>
          }
          findMany: {
            args: Prisma.LampiranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampiranPayload>[]
          }
          create: {
            args: Prisma.LampiranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampiranPayload>
          }
          createMany: {
            args: Prisma.LampiranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LampiranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampiranPayload>
          }
          update: {
            args: Prisma.LampiranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampiranPayload>
          }
          deleteMany: {
            args: Prisma.LampiranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LampiranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LampiranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampiranPayload>
          }
          aggregate: {
            args: Prisma.LampiranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLampiran>
          }
          groupBy: {
            args: Prisma.LampiranGroupByArgs<ExtArgs>
            result: $Utils.Optional<LampiranGroupByOutputType>[]
          }
          count: {
            args: Prisma.LampiranCountArgs<ExtArgs>
            result: $Utils.Optional<LampiranCountAggregateOutputType> | number
          }
        }
      }
      PermohonanBimbingan: {
        payload: Prisma.$PermohonanBimbinganPayload<ExtArgs>
        fields: Prisma.PermohonanBimbinganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermohonanBimbinganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermohonanBimbinganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermohonanBimbinganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermohonanBimbinganPayload>
          }
          findFirst: {
            args: Prisma.PermohonanBimbinganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermohonanBimbinganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermohonanBimbinganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermohonanBimbinganPayload>
          }
          findMany: {
            args: Prisma.PermohonanBimbinganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermohonanBimbinganPayload>[]
          }
          create: {
            args: Prisma.PermohonanBimbinganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermohonanBimbinganPayload>
          }
          createMany: {
            args: Prisma.PermohonanBimbinganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermohonanBimbinganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermohonanBimbinganPayload>
          }
          update: {
            args: Prisma.PermohonanBimbinganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermohonanBimbinganPayload>
          }
          deleteMany: {
            args: Prisma.PermohonanBimbinganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermohonanBimbinganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermohonanBimbinganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermohonanBimbinganPayload>
          }
          aggregate: {
            args: Prisma.PermohonanBimbinganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermohonanBimbingan>
          }
          groupBy: {
            args: Prisma.PermohonanBimbinganGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermohonanBimbinganGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermohonanBimbinganCountArgs<ExtArgs>
            result: $Utils.Optional<PermohonanBimbinganCountAggregateOutputType> | number
          }
        }
      }
      Notifikasi: {
        payload: Prisma.$NotifikasiPayload<ExtArgs>
        fields: Prisma.NotifikasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotifikasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotifikasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          findFirst: {
            args: Prisma.NotifikasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotifikasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          findMany: {
            args: Prisma.NotifikasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>[]
          }
          create: {
            args: Prisma.NotifikasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          createMany: {
            args: Prisma.NotifikasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotifikasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          update: {
            args: Prisma.NotifikasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          deleteMany: {
            args: Prisma.NotifikasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotifikasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotifikasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          aggregate: {
            args: Prisma.NotifikasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifikasi>
          }
          groupBy: {
            args: Prisma.NotifikasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotifikasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotifikasiCountArgs<ExtArgs>
            result: $Utils.Optional<NotifikasiCountAggregateOutputType> | number
          }
        }
      }
      ProgramStudi: {
        payload: Prisma.$ProgramStudiPayload<ExtArgs>
        fields: Prisma.ProgramStudiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramStudiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramStudiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          findFirst: {
            args: Prisma.ProgramStudiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramStudiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          findMany: {
            args: Prisma.ProgramStudiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>[]
          }
          create: {
            args: Prisma.ProgramStudiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          createMany: {
            args: Prisma.ProgramStudiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgramStudiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          update: {
            args: Prisma.ProgramStudiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          deleteMany: {
            args: Prisma.ProgramStudiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramStudiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramStudiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          aggregate: {
            args: Prisma.ProgramStudiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramStudi>
          }
          groupBy: {
            args: Prisma.ProgramStudiGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramStudiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramStudiCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramStudiCountAggregateOutputType> | number
          }
        }
      }
      ProgramStudiField: {
        payload: Prisma.$ProgramStudiFieldPayload<ExtArgs>
        fields: Prisma.ProgramStudiFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramStudiFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramStudiFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiFieldPayload>
          }
          findFirst: {
            args: Prisma.ProgramStudiFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramStudiFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiFieldPayload>
          }
          findMany: {
            args: Prisma.ProgramStudiFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiFieldPayload>[]
          }
          create: {
            args: Prisma.ProgramStudiFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiFieldPayload>
          }
          createMany: {
            args: Prisma.ProgramStudiFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgramStudiFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiFieldPayload>
          }
          update: {
            args: Prisma.ProgramStudiFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiFieldPayload>
          }
          deleteMany: {
            args: Prisma.ProgramStudiFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramStudiFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramStudiFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiFieldPayload>
          }
          aggregate: {
            args: Prisma.ProgramStudiFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramStudiField>
          }
          groupBy: {
            args: Prisma.ProgramStudiFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramStudiFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramStudiFieldCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramStudiFieldCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pengguna?: PenggunaOmit
    mahasiswa?: MahasiswaOmit
    dosen?: DosenOmit
    logbook?: LogbookOmit
    riwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingOmit
    kegiatan?: KegiatanOmit
    mataKuliah?: MataKuliahOmit
    lampiran?: LampiranOmit
    permohonanBimbingan?: PermohonanBimbinganOmit
    notifikasi?: NotifikasiOmit
    programStudi?: ProgramStudiOmit
    programStudiField?: ProgramStudiFieldOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PenggunaCountOutputType
   */

  export type PenggunaCountOutputType = {
    notifikasi: number
    logbook: number
  }

  export type PenggunaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifikasi?: boolean | PenggunaCountOutputTypeCountNotifikasiArgs
    logbook?: boolean | PenggunaCountOutputTypeCountLogbookArgs
  }

  // Custom InputTypes
  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenggunaCountOutputType
     */
    select?: PenggunaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountNotifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotifikasiWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountLogbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogbookWhereInput
  }


  /**
   * Count Type MahasiswaCountOutputType
   */

  export type MahasiswaCountOutputType = {
    logbook: number
    permohonanBimbingan: number
    RiwayatPerubahanPembimbing: number
  }

  export type MahasiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logbook?: boolean | MahasiswaCountOutputTypeCountLogbookArgs
    permohonanBimbingan?: boolean | MahasiswaCountOutputTypeCountPermohonanBimbinganArgs
    RiwayatPerubahanPembimbing?: boolean | MahasiswaCountOutputTypeCountRiwayatPerubahanPembimbingArgs
  }

  // Custom InputTypes
  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     */
    select?: MahasiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountLogbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogbookWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountPermohonanBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermohonanBimbinganWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountRiwayatPerubahanPembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiwayatPerubahanPembimbingWhereInput
  }


  /**
   * Count Type DosenCountOutputType
   */

  export type DosenCountOutputType = {
    mahasiswaBimbingan: number
    permohonanBimbingan: number
  }

  export type DosenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswaBimbingan?: boolean | DosenCountOutputTypeCountMahasiswaBimbinganArgs
    permohonanBimbingan?: boolean | DosenCountOutputTypeCountPermohonanBimbinganArgs
  }

  // Custom InputTypes
  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosenCountOutputType
     */
    select?: DosenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountMahasiswaBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountPermohonanBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermohonanBimbinganWhereInput
  }


  /**
   * Count Type LogbookCountOutputType
   */

  export type LogbookCountOutputType = {
    kegiatan: number
  }

  export type LogbookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | LogbookCountOutputTypeCountKegiatanArgs
  }

  // Custom InputTypes
  /**
   * LogbookCountOutputType without action
   */
  export type LogbookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogbookCountOutputType
     */
    select?: LogbookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LogbookCountOutputType without action
   */
  export type LogbookCountOutputTypeCountKegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KegiatanWhereInput
  }


  /**
   * Count Type KegiatanCountOutputType
   */

  export type KegiatanCountOutputType = {
    lampiran: number
  }

  export type KegiatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lampiran?: boolean | KegiatanCountOutputTypeCountLampiranArgs
  }

  // Custom InputTypes
  /**
   * KegiatanCountOutputType without action
   */
  export type KegiatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KegiatanCountOutputType
     */
    select?: KegiatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KegiatanCountOutputType without action
   */
  export type KegiatanCountOutputTypeCountLampiranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LampiranWhereInput
  }


  /**
   * Count Type MataKuliahCountOutputType
   */

  export type MataKuliahCountOutputType = {
    kegiatan: number
  }

  export type MataKuliahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | MataKuliahCountOutputTypeCountKegiatanArgs
  }

  // Custom InputTypes
  /**
   * MataKuliahCountOutputType without action
   */
  export type MataKuliahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliahCountOutputType
     */
    select?: MataKuliahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MataKuliahCountOutputType without action
   */
  export type MataKuliahCountOutputTypeCountKegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KegiatanWhereInput
  }


  /**
   * Count Type ProgramStudiCountOutputType
   */

  export type ProgramStudiCountOutputType = {
    pengguna: number
    fields: number
    mataKuliah: number
  }

  export type ProgramStudiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | ProgramStudiCountOutputTypeCountPenggunaArgs
    fields?: boolean | ProgramStudiCountOutputTypeCountFieldsArgs
    mataKuliah?: boolean | ProgramStudiCountOutputTypeCountMataKuliahArgs
  }

  // Custom InputTypes
  /**
   * ProgramStudiCountOutputType without action
   */
  export type ProgramStudiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiCountOutputType
     */
    select?: ProgramStudiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramStudiCountOutputType without action
   */
  export type ProgramStudiCountOutputTypeCountPenggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenggunaWhereInput
  }

  /**
   * ProgramStudiCountOutputType without action
   */
  export type ProgramStudiCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramStudiFieldWhereInput
  }

  /**
   * ProgramStudiCountOutputType without action
   */
  export type ProgramStudiCountOutputTypeCountMataKuliahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MataKuliahWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pengguna
   */

  export type AggregatePengguna = {
    _count: PenggunaCountAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  export type PenggunaMinAggregateOutputType = {
    id: string | null
    nama: string | null
    username: string | null
    password: string | null
    peran: string | null
    avatar: string | null
    programStudiId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenggunaMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    username: string | null
    password: string | null
    peran: string | null
    avatar: string | null
    programStudiId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenggunaCountAggregateOutputType = {
    id: number
    nama: number
    username: number
    password: number
    peran: number
    avatar: number
    programStudiId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PenggunaMinAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    peran?: true
    avatar?: true
    programStudiId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenggunaMaxAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    peran?: true
    avatar?: true
    programStudiId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenggunaCountAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    peran?: true
    avatar?: true
    programStudiId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PenggunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengguna to aggregate.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penggunas
    **/
    _count?: true | PenggunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenggunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenggunaMaxAggregateInputType
  }

  export type GetPenggunaAggregateType<T extends PenggunaAggregateArgs> = {
        [P in keyof T & keyof AggregatePengguna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengguna[P]>
      : GetScalarType<T[P], AggregatePengguna[P]>
  }




  export type PenggunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenggunaWhereInput
    orderBy?: PenggunaOrderByWithAggregationInput | PenggunaOrderByWithAggregationInput[]
    by: PenggunaScalarFieldEnum[] | PenggunaScalarFieldEnum
    having?: PenggunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenggunaCountAggregateInputType | true
    _min?: PenggunaMinAggregateInputType
    _max?: PenggunaMaxAggregateInputType
  }

  export type PenggunaGroupByOutputType = {
    id: string
    nama: string
    username: string
    password: string
    peran: string
    avatar: string | null
    programStudiId: string
    createdAt: Date
    updatedAt: Date
    _count: PenggunaCountAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  type GetPenggunaGroupByPayload<T extends PenggunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenggunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenggunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
            : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
        }
      >
    >


  export type PenggunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    peran?: boolean
    avatar?: boolean
    programStudiId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mahasiswa?: boolean | Pengguna$mahasiswaArgs<ExtArgs>
    dosen?: boolean | Pengguna$dosenArgs<ExtArgs>
    notifikasi?: boolean | Pengguna$notifikasiArgs<ExtArgs>
    logbook?: boolean | Pengguna$logbookArgs<ExtArgs>
    programStudi?: boolean | ProgramStudiDefaultArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengguna"]>



  export type PenggunaSelectScalar = {
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    peran?: boolean
    avatar?: boolean
    programStudiId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PenggunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "username" | "password" | "peran" | "avatar" | "programStudiId" | "createdAt" | "updatedAt", ExtArgs["result"]["pengguna"]>
  export type PenggunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | Pengguna$mahasiswaArgs<ExtArgs>
    dosen?: boolean | Pengguna$dosenArgs<ExtArgs>
    notifikasi?: boolean | Pengguna$notifikasiArgs<ExtArgs>
    logbook?: boolean | Pengguna$logbookArgs<ExtArgs>
    programStudi?: boolean | ProgramStudiDefaultArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PenggunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pengguna"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs> | null
      dosen: Prisma.$DosenPayload<ExtArgs> | null
      notifikasi: Prisma.$NotifikasiPayload<ExtArgs>[]
      logbook: Prisma.$LogbookPayload<ExtArgs>[]
      programStudi: Prisma.$ProgramStudiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      username: string
      password: string
      peran: string
      avatar: string | null
      programStudiId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pengguna"]>
    composites: {}
  }

  type PenggunaGetPayload<S extends boolean | null | undefined | PenggunaDefaultArgs> = $Result.GetResult<Prisma.$PenggunaPayload, S>

  type PenggunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenggunaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenggunaCountAggregateInputType | true
    }

  export interface PenggunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pengguna'], meta: { name: 'Pengguna' } }
    /**
     * Find zero or one Pengguna that matches the filter.
     * @param {PenggunaFindUniqueArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenggunaFindUniqueArgs>(args: SelectSubset<T, PenggunaFindUniqueArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengguna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenggunaFindUniqueOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenggunaFindUniqueOrThrowArgs>(args: SelectSubset<T, PenggunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaFindFirstArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenggunaFindFirstArgs>(args?: SelectSubset<T, PenggunaFindFirstArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaFindFirstOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenggunaFindFirstOrThrowArgs>(args?: SelectSubset<T, PenggunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penggunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penggunas
     * const penggunas = await prisma.pengguna.findMany()
     * 
     * // Get first 10 Penggunas
     * const penggunas = await prisma.pengguna.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penggunaWithIdOnly = await prisma.pengguna.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenggunaFindManyArgs>(args?: SelectSubset<T, PenggunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengguna.
     * @param {PenggunaCreateArgs} args - Arguments to create a Pengguna.
     * @example
     * // Create one Pengguna
     * const Pengguna = await prisma.pengguna.create({
     *   data: {
     *     // ... data to create a Pengguna
     *   }
     * })
     * 
     */
    create<T extends PenggunaCreateArgs>(args: SelectSubset<T, PenggunaCreateArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penggunas.
     * @param {PenggunaCreateManyArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenggunaCreateManyArgs>(args?: SelectSubset<T, PenggunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pengguna.
     * @param {PenggunaDeleteArgs} args - Arguments to delete one Pengguna.
     * @example
     * // Delete one Pengguna
     * const Pengguna = await prisma.pengguna.delete({
     *   where: {
     *     // ... filter to delete one Pengguna
     *   }
     * })
     * 
     */
    delete<T extends PenggunaDeleteArgs>(args: SelectSubset<T, PenggunaDeleteArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengguna.
     * @param {PenggunaUpdateArgs} args - Arguments to update one Pengguna.
     * @example
     * // Update one Pengguna
     * const pengguna = await prisma.pengguna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenggunaUpdateArgs>(args: SelectSubset<T, PenggunaUpdateArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penggunas.
     * @param {PenggunaDeleteManyArgs} args - Arguments to filter Penggunas to delete.
     * @example
     * // Delete a few Penggunas
     * const { count } = await prisma.pengguna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenggunaDeleteManyArgs>(args?: SelectSubset<T, PenggunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenggunaUpdateManyArgs>(args: SelectSubset<T, PenggunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pengguna.
     * @param {PenggunaUpsertArgs} args - Arguments to update or create a Pengguna.
     * @example
     * // Update or create a Pengguna
     * const pengguna = await prisma.pengguna.upsert({
     *   create: {
     *     // ... data to create a Pengguna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengguna we want to update
     *   }
     * })
     */
    upsert<T extends PenggunaUpsertArgs>(args: SelectSubset<T, PenggunaUpsertArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaCountArgs} args - Arguments to filter Penggunas to count.
     * @example
     * // Count the number of Penggunas
     * const count = await prisma.pengguna.count({
     *   where: {
     *     // ... the filter for the Penggunas we want to count
     *   }
     * })
    **/
    count<T extends PenggunaCountArgs>(
      args?: Subset<T, PenggunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenggunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PenggunaAggregateArgs>(args: Subset<T, PenggunaAggregateArgs>): Prisma.PrismaPromise<GetPenggunaAggregateType<T>>

    /**
     * Group by Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PenggunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenggunaGroupByArgs['orderBy'] }
        : { orderBy?: PenggunaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PenggunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenggunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pengguna model
   */
  readonly fields: PenggunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pengguna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenggunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends Pengguna$mahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, Pengguna$mahasiswaArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dosen<T extends Pengguna$dosenArgs<ExtArgs> = {}>(args?: Subset<T, Pengguna$dosenArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifikasi<T extends Pengguna$notifikasiArgs<ExtArgs> = {}>(args?: Subset<T, Pengguna$notifikasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logbook<T extends Pengguna$logbookArgs<ExtArgs> = {}>(args?: Subset<T, Pengguna$logbookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    programStudi<T extends ProgramStudiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramStudiDefaultArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pengguna model
   */
  interface PenggunaFieldRefs {
    readonly id: FieldRef<"Pengguna", 'String'>
    readonly nama: FieldRef<"Pengguna", 'String'>
    readonly username: FieldRef<"Pengguna", 'String'>
    readonly password: FieldRef<"Pengguna", 'String'>
    readonly peran: FieldRef<"Pengguna", 'String'>
    readonly avatar: FieldRef<"Pengguna", 'String'>
    readonly programStudiId: FieldRef<"Pengguna", 'String'>
    readonly createdAt: FieldRef<"Pengguna", 'DateTime'>
    readonly updatedAt: FieldRef<"Pengguna", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pengguna findUnique
   */
  export type PenggunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna findUniqueOrThrow
   */
  export type PenggunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna findFirst
   */
  export type PenggunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penggunas.
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * Pengguna findFirstOrThrow
   */
  export type PenggunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penggunas.
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * Pengguna findMany
   */
  export type PenggunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Penggunas to fetch.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penggunas.
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * Pengguna create
   */
  export type PenggunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pengguna.
     */
    data: XOR<PenggunaCreateInput, PenggunaUncheckedCreateInput>
  }

  /**
   * Pengguna createMany
   */
  export type PenggunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penggunas.
     */
    data: PenggunaCreateManyInput | PenggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pengguna update
   */
  export type PenggunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pengguna.
     */
    data: XOR<PenggunaUpdateInput, PenggunaUncheckedUpdateInput>
    /**
     * Choose, which Pengguna to update.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna updateMany
   */
  export type PenggunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penggunas.
     */
    data: XOR<PenggunaUpdateManyMutationInput, PenggunaUncheckedUpdateManyInput>
    /**
     * Filter which Penggunas to update
     */
    where?: PenggunaWhereInput
    /**
     * Limit how many Penggunas to update.
     */
    limit?: number
  }

  /**
   * Pengguna upsert
   */
  export type PenggunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pengguna to update in case it exists.
     */
    where: PenggunaWhereUniqueInput
    /**
     * In case the Pengguna found by the `where` argument doesn't exist, create a new Pengguna with this data.
     */
    create: XOR<PenggunaCreateInput, PenggunaUncheckedCreateInput>
    /**
     * In case the Pengguna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenggunaUpdateInput, PenggunaUncheckedUpdateInput>
  }

  /**
   * Pengguna delete
   */
  export type PenggunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter which Pengguna to delete.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna deleteMany
   */
  export type PenggunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penggunas to delete
     */
    where?: PenggunaWhereInput
    /**
     * Limit how many Penggunas to delete.
     */
    limit?: number
  }

  /**
   * Pengguna.mahasiswa
   */
  export type Pengguna$mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    where?: MahasiswaWhereInput
  }

  /**
   * Pengguna.dosen
   */
  export type Pengguna$dosenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    where?: DosenWhereInput
  }

  /**
   * Pengguna.notifikasi
   */
  export type Pengguna$notifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    where?: NotifikasiWhereInput
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    cursor?: NotifikasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * Pengguna.logbook
   */
  export type Pengguna$logbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    where?: LogbookWhereInput
    orderBy?: LogbookOrderByWithRelationInput | LogbookOrderByWithRelationInput[]
    cursor?: LogbookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }

  /**
   * Pengguna without action
   */
  export type PenggunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
  }


  /**
   * Model Mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaAvgAggregateOutputType = {
    semester: number | null
  }

  export type MahasiswaSumAggregateOutputType = {
    semester: number | null
  }

  export type MahasiswaMinAggregateOutputType = {
    id: string | null
    penggunaId: string | null
    pembimbingId: string | null
    semester: number | null
    judulDisertasi: string | null
    angkatan: string | null
    tempatTanggalLahir: string | null
    alamat: string | null
    alamatKeluarga: string | null
    tahunLulus: string | null
    mulaiMasukPendidikan: Date | null
    pekerjaan: string | null
    nomorTelpon: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    id: string | null
    penggunaId: string | null
    pembimbingId: string | null
    semester: number | null
    judulDisertasi: string | null
    angkatan: string | null
    tempatTanggalLahir: string | null
    alamat: string | null
    alamatKeluarga: string | null
    tahunLulus: string | null
    mulaiMasukPendidikan: Date | null
    pekerjaan: string | null
    nomorTelpon: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MahasiswaCountAggregateOutputType = {
    id: number
    penggunaId: number
    pembimbingId: number
    semester: number
    judulDisertasi: number
    angkatan: number
    tempatTanggalLahir: number
    alamat: number
    alamatKeluarga: number
    tahunLulus: number
    mulaiMasukPendidikan: number
    pekerjaan: number
    nomorTelpon: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MahasiswaAvgAggregateInputType = {
    semester?: true
  }

  export type MahasiswaSumAggregateInputType = {
    semester?: true
  }

  export type MahasiswaMinAggregateInputType = {
    id?: true
    penggunaId?: true
    pembimbingId?: true
    semester?: true
    judulDisertasi?: true
    angkatan?: true
    tempatTanggalLahir?: true
    alamat?: true
    alamatKeluarga?: true
    tahunLulus?: true
    mulaiMasukPendidikan?: true
    pekerjaan?: true
    nomorTelpon?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    id?: true
    penggunaId?: true
    pembimbingId?: true
    semester?: true
    judulDisertasi?: true
    angkatan?: true
    tempatTanggalLahir?: true
    alamat?: true
    alamatKeluarga?: true
    tahunLulus?: true
    mulaiMasukPendidikan?: true
    pekerjaan?: true
    nomorTelpon?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MahasiswaCountAggregateInputType = {
    id?: true
    penggunaId?: true
    pembimbingId?: true
    semester?: true
    judulDisertasi?: true
    angkatan?: true
    tempatTanggalLahir?: true
    alamat?: true
    alamatKeluarga?: true
    tahunLulus?: true
    mulaiMasukPendidikan?: true
    pekerjaan?: true
    nomorTelpon?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswa to aggregate.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MahasiswaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MahasiswaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type MahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithAggregationInput | MahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: MahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _avg?: MahasiswaAvgAggregateInputType
    _sum?: MahasiswaSumAggregateInputType
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    id: string
    penggunaId: string
    pembimbingId: string | null
    semester: number | null
    judulDisertasi: string | null
    angkatan: string | null
    tempatTanggalLahir: string | null
    alamat: string | null
    alamatKeluarga: string | null
    tahunLulus: string | null
    mulaiMasukPendidikan: Date | null
    pekerjaan: string | null
    nomorTelpon: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends MahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type MahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penggunaId?: boolean
    pembimbingId?: boolean
    semester?: boolean
    judulDisertasi?: boolean
    angkatan?: boolean
    tempatTanggalLahir?: boolean
    alamat?: boolean
    alamatKeluarga?: boolean
    tahunLulus?: boolean
    mulaiMasukPendidikan?: boolean
    pekerjaan?: boolean
    nomorTelpon?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    logbook?: boolean | Mahasiswa$logbookArgs<ExtArgs>
    pembimbing?: boolean | Mahasiswa$pembimbingArgs<ExtArgs>
    permohonanBimbingan?: boolean | Mahasiswa$permohonanBimbinganArgs<ExtArgs>
    RiwayatPerubahanPembimbing?: boolean | Mahasiswa$RiwayatPerubahanPembimbingArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>



  export type MahasiswaSelectScalar = {
    id?: boolean
    penggunaId?: boolean
    pembimbingId?: boolean
    semester?: boolean
    judulDisertasi?: boolean
    angkatan?: boolean
    tempatTanggalLahir?: boolean
    alamat?: boolean
    alamatKeluarga?: boolean
    tahunLulus?: boolean
    mulaiMasukPendidikan?: boolean
    pekerjaan?: boolean
    nomorTelpon?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MahasiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "penggunaId" | "pembimbingId" | "semester" | "judulDisertasi" | "angkatan" | "tempatTanggalLahir" | "alamat" | "alamatKeluarga" | "tahunLulus" | "mulaiMasukPendidikan" | "pekerjaan" | "nomorTelpon" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["mahasiswa"]>
  export type MahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    logbook?: boolean | Mahasiswa$logbookArgs<ExtArgs>
    pembimbing?: boolean | Mahasiswa$pembimbingArgs<ExtArgs>
    permohonanBimbingan?: boolean | Mahasiswa$permohonanBimbinganArgs<ExtArgs>
    RiwayatPerubahanPembimbing?: boolean | Mahasiswa$RiwayatPerubahanPembimbingArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mahasiswa"
    objects: {
      pengguna: Prisma.$PenggunaPayload<ExtArgs>
      logbook: Prisma.$LogbookPayload<ExtArgs>[]
      pembimbing: Prisma.$DosenPayload<ExtArgs> | null
      permohonanBimbingan: Prisma.$PermohonanBimbinganPayload<ExtArgs>[]
      RiwayatPerubahanPembimbing: Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      penggunaId: string
      pembimbingId: string | null
      semester: number | null
      judulDisertasi: string | null
      angkatan: string | null
      tempatTanggalLahir: string | null
      alamat: string | null
      alamatKeluarga: string | null
      tahunLulus: string | null
      mulaiMasukPendidikan: Date | null
      pekerjaan: string | null
      nomorTelpon: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type MahasiswaGetPayload<S extends boolean | null | undefined | MahasiswaDefaultArgs> = $Result.GetResult<Prisma.$MahasiswaPayload, S>

  type MahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MahasiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface MahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mahasiswa'], meta: { name: 'Mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {MahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MahasiswaFindUniqueArgs>(args: SelectSubset<T, MahasiswaFindUniqueArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, MahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MahasiswaFindFirstArgs>(args?: SelectSubset<T, MahasiswaFindFirstArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, MahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mahasiswaWithIdOnly = await prisma.mahasiswa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MahasiswaFindManyArgs>(args?: SelectSubset<T, MahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mahasiswa.
     * @param {MahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends MahasiswaCreateArgs>(args: SelectSubset<T, MahasiswaCreateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mahasiswas.
     * @param {MahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MahasiswaCreateManyArgs>(args?: SelectSubset<T, MahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mahasiswa.
     * @param {MahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends MahasiswaDeleteArgs>(args: SelectSubset<T, MahasiswaDeleteArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mahasiswa.
     * @param {MahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MahasiswaUpdateArgs>(args: SelectSubset<T, MahasiswaUpdateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mahasiswas.
     * @param {MahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MahasiswaDeleteManyArgs>(args?: SelectSubset<T, MahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MahasiswaUpdateManyArgs>(args: SelectSubset<T, MahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mahasiswa.
     * @param {MahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends MahasiswaUpsertArgs>(args: SelectSubset<T, MahasiswaUpsertArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends MahasiswaCountArgs>(
      args?: Subset<T, MahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: MahasiswaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mahasiswa model
   */
  readonly fields: MahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends PenggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenggunaDefaultArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logbook<T extends Mahasiswa$logbookArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$logbookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pembimbing<T extends Mahasiswa$pembimbingArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$pembimbingArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    permohonanBimbingan<T extends Mahasiswa$permohonanBimbinganArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$permohonanBimbinganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RiwayatPerubahanPembimbing<T extends Mahasiswa$RiwayatPerubahanPembimbingArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$RiwayatPerubahanPembimbingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mahasiswa model
   */
  interface MahasiswaFieldRefs {
    readonly id: FieldRef<"Mahasiswa", 'String'>
    readonly penggunaId: FieldRef<"Mahasiswa", 'String'>
    readonly pembimbingId: FieldRef<"Mahasiswa", 'String'>
    readonly semester: FieldRef<"Mahasiswa", 'Int'>
    readonly judulDisertasi: FieldRef<"Mahasiswa", 'String'>
    readonly angkatan: FieldRef<"Mahasiswa", 'String'>
    readonly tempatTanggalLahir: FieldRef<"Mahasiswa", 'String'>
    readonly alamat: FieldRef<"Mahasiswa", 'String'>
    readonly alamatKeluarga: FieldRef<"Mahasiswa", 'String'>
    readonly tahunLulus: FieldRef<"Mahasiswa", 'String'>
    readonly mulaiMasukPendidikan: FieldRef<"Mahasiswa", 'DateTime'>
    readonly pekerjaan: FieldRef<"Mahasiswa", 'String'>
    readonly nomorTelpon: FieldRef<"Mahasiswa", 'String'>
    readonly email: FieldRef<"Mahasiswa", 'String'>
    readonly createdAt: FieldRef<"Mahasiswa", 'DateTime'>
    readonly updatedAt: FieldRef<"Mahasiswa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mahasiswa findUnique
   */
  export type MahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findUniqueOrThrow
   */
  export type MahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findFirst
   */
  export type MahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findFirstOrThrow
   */
  export type MahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findMany
   */
  export type MahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswas to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa create
   */
  export type MahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mahasiswa.
     */
    data: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
  }

  /**
   * Mahasiswa createMany
   */
  export type MahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mahasiswas.
     */
    data: MahasiswaCreateManyInput | MahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mahasiswa update
   */
  export type MahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mahasiswa.
     */
    data: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
    /**
     * Choose, which Mahasiswa to update.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa updateMany
   */
  export type MahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mahasiswas.
     */
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to update.
     */
    limit?: number
  }

  /**
   * Mahasiswa upsert
   */
  export type MahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mahasiswa to update in case it exists.
     */
    where: MahasiswaWhereUniqueInput
    /**
     * In case the Mahasiswa found by the `where` argument doesn't exist, create a new Mahasiswa with this data.
     */
    create: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
    /**
     * In case the Mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
  }

  /**
   * Mahasiswa delete
   */
  export type MahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter which Mahasiswa to delete.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa deleteMany
   */
  export type MahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswas to delete
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to delete.
     */
    limit?: number
  }

  /**
   * Mahasiswa.logbook
   */
  export type Mahasiswa$logbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    where?: LogbookWhereInput
    orderBy?: LogbookOrderByWithRelationInput | LogbookOrderByWithRelationInput[]
    cursor?: LogbookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }

  /**
   * Mahasiswa.pembimbing
   */
  export type Mahasiswa$pembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    where?: DosenWhereInput
  }

  /**
   * Mahasiswa.permohonanBimbingan
   */
  export type Mahasiswa$permohonanBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    where?: PermohonanBimbinganWhereInput
    orderBy?: PermohonanBimbinganOrderByWithRelationInput | PermohonanBimbinganOrderByWithRelationInput[]
    cursor?: PermohonanBimbinganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermohonanBimbinganScalarFieldEnum | PermohonanBimbinganScalarFieldEnum[]
  }

  /**
   * Mahasiswa.RiwayatPerubahanPembimbing
   */
  export type Mahasiswa$RiwayatPerubahanPembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
    where?: RiwayatPerubahanPembimbingWhereInput
    orderBy?: RiwayatPerubahanPembimbingOrderByWithRelationInput | RiwayatPerubahanPembimbingOrderByWithRelationInput[]
    cursor?: RiwayatPerubahanPembimbingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RiwayatPerubahanPembimbingScalarFieldEnum | RiwayatPerubahanPembimbingScalarFieldEnum[]
  }

  /**
   * Mahasiswa without action
   */
  export type MahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
  }


  /**
   * Model Dosen
   */

  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenMinAggregateOutputType = {
    id: string | null
    penggunaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DosenMaxAggregateOutputType = {
    id: string | null
    penggunaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DosenCountAggregateOutputType = {
    id: number
    penggunaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DosenMinAggregateInputType = {
    id?: true
    penggunaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DosenMaxAggregateInputType = {
    id?: true
    penggunaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DosenCountAggregateInputType = {
    id?: true
    penggunaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DosenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dosen to aggregate.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type DosenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DosenWhereInput
    orderBy?: DosenOrderByWithAggregationInput | DosenOrderByWithAggregationInput[]
    by: DosenScalarFieldEnum[] | DosenScalarFieldEnum
    having?: DosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }

  export type DosenGroupByOutputType = {
    id: string
    penggunaId: string
    createdAt: Date
    updatedAt: Date
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends DosenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type DosenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penggunaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    mahasiswaBimbingan?: boolean | Dosen$mahasiswaBimbinganArgs<ExtArgs>
    permohonanBimbingan?: boolean | Dosen$permohonanBimbinganArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>



  export type DosenSelectScalar = {
    id?: boolean
    penggunaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DosenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "penggunaId" | "createdAt" | "updatedAt", ExtArgs["result"]["dosen"]>
  export type DosenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    mahasiswaBimbingan?: boolean | Dosen$mahasiswaBimbinganArgs<ExtArgs>
    permohonanBimbingan?: boolean | Dosen$permohonanBimbinganArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DosenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dosen"
    objects: {
      pengguna: Prisma.$PenggunaPayload<ExtArgs>
      mahasiswaBimbingan: Prisma.$MahasiswaPayload<ExtArgs>[]
      permohonanBimbingan: Prisma.$PermohonanBimbinganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      penggunaId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dosen"]>
    composites: {}
  }

  type DosenGetPayload<S extends boolean | null | undefined | DosenDefaultArgs> = $Result.GetResult<Prisma.$DosenPayload, S>

  type DosenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DosenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DosenCountAggregateInputType | true
    }

  export interface DosenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dosen'], meta: { name: 'Dosen' } }
    /**
     * Find zero or one Dosen that matches the filter.
     * @param {DosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DosenFindUniqueArgs>(args: SelectSubset<T, DosenFindUniqueArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dosen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DosenFindUniqueOrThrowArgs>(args: SelectSubset<T, DosenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DosenFindFirstArgs>(args?: SelectSubset<T, DosenFindFirstArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DosenFindFirstOrThrowArgs>(args?: SelectSubset<T, DosenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dosenWithIdOnly = await prisma.dosen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DosenFindManyArgs>(args?: SelectSubset<T, DosenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dosen.
     * @param {DosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
     */
    create<T extends DosenCreateArgs>(args: SelectSubset<T, DosenCreateArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dosens.
     * @param {DosenCreateManyArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DosenCreateManyArgs>(args?: SelectSubset<T, DosenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dosen.
     * @param {DosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
     */
    delete<T extends DosenDeleteArgs>(args: SelectSubset<T, DosenDeleteArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dosen.
     * @param {DosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DosenUpdateArgs>(args: SelectSubset<T, DosenUpdateArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dosens.
     * @param {DosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DosenDeleteManyArgs>(args?: SelectSubset<T, DosenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DosenUpdateManyArgs>(args: SelectSubset<T, DosenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dosen.
     * @param {DosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
     */
    upsert<T extends DosenUpsertArgs>(args: SelectSubset<T, DosenUpsertArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends DosenCountArgs>(
      args?: Subset<T, DosenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): Prisma.PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DosenGroupByArgs['orderBy'] }
        : { orderBy?: DosenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dosen model
   */
  readonly fields: DosenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DosenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends PenggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenggunaDefaultArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mahasiswaBimbingan<T extends Dosen$mahasiswaBimbinganArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$mahasiswaBimbinganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permohonanBimbingan<T extends Dosen$permohonanBimbinganArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$permohonanBimbinganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dosen model
   */
  interface DosenFieldRefs {
    readonly id: FieldRef<"Dosen", 'String'>
    readonly penggunaId: FieldRef<"Dosen", 'String'>
    readonly createdAt: FieldRef<"Dosen", 'DateTime'>
    readonly updatedAt: FieldRef<"Dosen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dosen findUnique
   */
  export type DosenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen findUniqueOrThrow
   */
  export type DosenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen findFirst
   */
  export type DosenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen findFirstOrThrow
   */
  export type DosenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen findMany
   */
  export type DosenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosens to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen create
   */
  export type DosenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The data needed to create a Dosen.
     */
    data: XOR<DosenCreateInput, DosenUncheckedCreateInput>
  }

  /**
   * Dosen createMany
   */
  export type DosenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dosens.
     */
    data: DosenCreateManyInput | DosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dosen update
   */
  export type DosenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The data needed to update a Dosen.
     */
    data: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
    /**
     * Choose, which Dosen to update.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen updateMany
   */
  export type DosenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dosens.
     */
    data: XOR<DosenUpdateManyMutationInput, DosenUncheckedUpdateManyInput>
    /**
     * Filter which Dosens to update
     */
    where?: DosenWhereInput
    /**
     * Limit how many Dosens to update.
     */
    limit?: number
  }

  /**
   * Dosen upsert
   */
  export type DosenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The filter to search for the Dosen to update in case it exists.
     */
    where: DosenWhereUniqueInput
    /**
     * In case the Dosen found by the `where` argument doesn't exist, create a new Dosen with this data.
     */
    create: XOR<DosenCreateInput, DosenUncheckedCreateInput>
    /**
     * In case the Dosen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
  }

  /**
   * Dosen delete
   */
  export type DosenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter which Dosen to delete.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen deleteMany
   */
  export type DosenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dosens to delete
     */
    where?: DosenWhereInput
    /**
     * Limit how many Dosens to delete.
     */
    limit?: number
  }

  /**
   * Dosen.mahasiswaBimbingan
   */
  export type Dosen$mahasiswaBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    cursor?: MahasiswaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Dosen.permohonanBimbingan
   */
  export type Dosen$permohonanBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    where?: PermohonanBimbinganWhereInput
    orderBy?: PermohonanBimbinganOrderByWithRelationInput | PermohonanBimbinganOrderByWithRelationInput[]
    cursor?: PermohonanBimbinganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermohonanBimbinganScalarFieldEnum | PermohonanBimbinganScalarFieldEnum[]
  }

  /**
   * Dosen without action
   */
  export type DosenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
  }


  /**
   * Model Logbook
   */

  export type AggregateLogbook = {
    _count: LogbookCountAggregateOutputType | null
    _min: LogbookMinAggregateOutputType | null
    _max: LogbookMaxAggregateOutputType | null
  }

  export type LogbookMinAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    penggunaId: string | null
  }

  export type LogbookMaxAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    penggunaId: string | null
  }

  export type LogbookCountAggregateOutputType = {
    id: number
    mahasiswaId: number
    createdAt: number
    updatedAt: number
    penggunaId: number
    _all: number
  }


  export type LogbookMinAggregateInputType = {
    id?: true
    mahasiswaId?: true
    createdAt?: true
    updatedAt?: true
    penggunaId?: true
  }

  export type LogbookMaxAggregateInputType = {
    id?: true
    mahasiswaId?: true
    createdAt?: true
    updatedAt?: true
    penggunaId?: true
  }

  export type LogbookCountAggregateInputType = {
    id?: true
    mahasiswaId?: true
    createdAt?: true
    updatedAt?: true
    penggunaId?: true
    _all?: true
  }

  export type LogbookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logbook to aggregate.
     */
    where?: LogbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logbooks to fetch.
     */
    orderBy?: LogbookOrderByWithRelationInput | LogbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logbooks
    **/
    _count?: true | LogbookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogbookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogbookMaxAggregateInputType
  }

  export type GetLogbookAggregateType<T extends LogbookAggregateArgs> = {
        [P in keyof T & keyof AggregateLogbook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogbook[P]>
      : GetScalarType<T[P], AggregateLogbook[P]>
  }




  export type LogbookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogbookWhereInput
    orderBy?: LogbookOrderByWithAggregationInput | LogbookOrderByWithAggregationInput[]
    by: LogbookScalarFieldEnum[] | LogbookScalarFieldEnum
    having?: LogbookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogbookCountAggregateInputType | true
    _min?: LogbookMinAggregateInputType
    _max?: LogbookMaxAggregateInputType
  }

  export type LogbookGroupByOutputType = {
    id: string
    mahasiswaId: string
    createdAt: Date
    updatedAt: Date
    penggunaId: string | null
    _count: LogbookCountAggregateOutputType | null
    _min: LogbookMinAggregateOutputType | null
    _max: LogbookMaxAggregateOutputType | null
  }

  type GetLogbookGroupByPayload<T extends LogbookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogbookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogbookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogbookGroupByOutputType[P]>
            : GetScalarType<T[P], LogbookGroupByOutputType[P]>
        }
      >
    >


  export type LogbookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    penggunaId?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    kegiatan?: boolean | Logbook$kegiatanArgs<ExtArgs>
    Pengguna?: boolean | Logbook$PenggunaArgs<ExtArgs>
    _count?: boolean | LogbookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logbook"]>



  export type LogbookSelectScalar = {
    id?: boolean
    mahasiswaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    penggunaId?: boolean
  }

  export type LogbookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mahasiswaId" | "createdAt" | "updatedAt" | "penggunaId", ExtArgs["result"]["logbook"]>
  export type LogbookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    kegiatan?: boolean | Logbook$kegiatanArgs<ExtArgs>
    Pengguna?: boolean | Logbook$PenggunaArgs<ExtArgs>
    _count?: boolean | LogbookCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LogbookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Logbook"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
      kegiatan: Prisma.$KegiatanPayload<ExtArgs>[]
      Pengguna: Prisma.$PenggunaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mahasiswaId: string
      createdAt: Date
      updatedAt: Date
      penggunaId: string | null
    }, ExtArgs["result"]["logbook"]>
    composites: {}
  }

  type LogbookGetPayload<S extends boolean | null | undefined | LogbookDefaultArgs> = $Result.GetResult<Prisma.$LogbookPayload, S>

  type LogbookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogbookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogbookCountAggregateInputType | true
    }

  export interface LogbookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Logbook'], meta: { name: 'Logbook' } }
    /**
     * Find zero or one Logbook that matches the filter.
     * @param {LogbookFindUniqueArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogbookFindUniqueArgs>(args: SelectSubset<T, LogbookFindUniqueArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logbook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogbookFindUniqueOrThrowArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogbookFindUniqueOrThrowArgs>(args: SelectSubset<T, LogbookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logbook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookFindFirstArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogbookFindFirstArgs>(args?: SelectSubset<T, LogbookFindFirstArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logbook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookFindFirstOrThrowArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogbookFindFirstOrThrowArgs>(args?: SelectSubset<T, LogbookFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logbooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logbooks
     * const logbooks = await prisma.logbook.findMany()
     * 
     * // Get first 10 Logbooks
     * const logbooks = await prisma.logbook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logbookWithIdOnly = await prisma.logbook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogbookFindManyArgs>(args?: SelectSubset<T, LogbookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logbook.
     * @param {LogbookCreateArgs} args - Arguments to create a Logbook.
     * @example
     * // Create one Logbook
     * const Logbook = await prisma.logbook.create({
     *   data: {
     *     // ... data to create a Logbook
     *   }
     * })
     * 
     */
    create<T extends LogbookCreateArgs>(args: SelectSubset<T, LogbookCreateArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logbooks.
     * @param {LogbookCreateManyArgs} args - Arguments to create many Logbooks.
     * @example
     * // Create many Logbooks
     * const logbook = await prisma.logbook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogbookCreateManyArgs>(args?: SelectSubset<T, LogbookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logbook.
     * @param {LogbookDeleteArgs} args - Arguments to delete one Logbook.
     * @example
     * // Delete one Logbook
     * const Logbook = await prisma.logbook.delete({
     *   where: {
     *     // ... filter to delete one Logbook
     *   }
     * })
     * 
     */
    delete<T extends LogbookDeleteArgs>(args: SelectSubset<T, LogbookDeleteArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logbook.
     * @param {LogbookUpdateArgs} args - Arguments to update one Logbook.
     * @example
     * // Update one Logbook
     * const logbook = await prisma.logbook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogbookUpdateArgs>(args: SelectSubset<T, LogbookUpdateArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logbooks.
     * @param {LogbookDeleteManyArgs} args - Arguments to filter Logbooks to delete.
     * @example
     * // Delete a few Logbooks
     * const { count } = await prisma.logbook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogbookDeleteManyArgs>(args?: SelectSubset<T, LogbookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logbooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logbooks
     * const logbook = await prisma.logbook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogbookUpdateManyArgs>(args: SelectSubset<T, LogbookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logbook.
     * @param {LogbookUpsertArgs} args - Arguments to update or create a Logbook.
     * @example
     * // Update or create a Logbook
     * const logbook = await prisma.logbook.upsert({
     *   create: {
     *     // ... data to create a Logbook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logbook we want to update
     *   }
     * })
     */
    upsert<T extends LogbookUpsertArgs>(args: SelectSubset<T, LogbookUpsertArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logbooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookCountArgs} args - Arguments to filter Logbooks to count.
     * @example
     * // Count the number of Logbooks
     * const count = await prisma.logbook.count({
     *   where: {
     *     // ... the filter for the Logbooks we want to count
     *   }
     * })
    **/
    count<T extends LogbookCountArgs>(
      args?: Subset<T, LogbookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogbookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logbook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogbookAggregateArgs>(args: Subset<T, LogbookAggregateArgs>): Prisma.PrismaPromise<GetLogbookAggregateType<T>>

    /**
     * Group by Logbook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogbookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogbookGroupByArgs['orderBy'] }
        : { orderBy?: LogbookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogbookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogbookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Logbook model
   */
  readonly fields: LogbookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Logbook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogbookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kegiatan<T extends Logbook$kegiatanArgs<ExtArgs> = {}>(args?: Subset<T, Logbook$kegiatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pengguna<T extends Logbook$PenggunaArgs<ExtArgs> = {}>(args?: Subset<T, Logbook$PenggunaArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Logbook model
   */
  interface LogbookFieldRefs {
    readonly id: FieldRef<"Logbook", 'String'>
    readonly mahasiswaId: FieldRef<"Logbook", 'String'>
    readonly createdAt: FieldRef<"Logbook", 'DateTime'>
    readonly updatedAt: FieldRef<"Logbook", 'DateTime'>
    readonly penggunaId: FieldRef<"Logbook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Logbook findUnique
   */
  export type LogbookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter, which Logbook to fetch.
     */
    where: LogbookWhereUniqueInput
  }

  /**
   * Logbook findUniqueOrThrow
   */
  export type LogbookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter, which Logbook to fetch.
     */
    where: LogbookWhereUniqueInput
  }

  /**
   * Logbook findFirst
   */
  export type LogbookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter, which Logbook to fetch.
     */
    where?: LogbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logbooks to fetch.
     */
    orderBy?: LogbookOrderByWithRelationInput | LogbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logbooks.
     */
    cursor?: LogbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logbooks.
     */
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }

  /**
   * Logbook findFirstOrThrow
   */
  export type LogbookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter, which Logbook to fetch.
     */
    where?: LogbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logbooks to fetch.
     */
    orderBy?: LogbookOrderByWithRelationInput | LogbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logbooks.
     */
    cursor?: LogbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logbooks.
     */
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }

  /**
   * Logbook findMany
   */
  export type LogbookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter, which Logbooks to fetch.
     */
    where?: LogbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logbooks to fetch.
     */
    orderBy?: LogbookOrderByWithRelationInput | LogbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logbooks.
     */
    cursor?: LogbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logbooks.
     */
    skip?: number
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }

  /**
   * Logbook create
   */
  export type LogbookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * The data needed to create a Logbook.
     */
    data: XOR<LogbookCreateInput, LogbookUncheckedCreateInput>
  }

  /**
   * Logbook createMany
   */
  export type LogbookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logbooks.
     */
    data: LogbookCreateManyInput | LogbookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Logbook update
   */
  export type LogbookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * The data needed to update a Logbook.
     */
    data: XOR<LogbookUpdateInput, LogbookUncheckedUpdateInput>
    /**
     * Choose, which Logbook to update.
     */
    where: LogbookWhereUniqueInput
  }

  /**
   * Logbook updateMany
   */
  export type LogbookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logbooks.
     */
    data: XOR<LogbookUpdateManyMutationInput, LogbookUncheckedUpdateManyInput>
    /**
     * Filter which Logbooks to update
     */
    where?: LogbookWhereInput
    /**
     * Limit how many Logbooks to update.
     */
    limit?: number
  }

  /**
   * Logbook upsert
   */
  export type LogbookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * The filter to search for the Logbook to update in case it exists.
     */
    where: LogbookWhereUniqueInput
    /**
     * In case the Logbook found by the `where` argument doesn't exist, create a new Logbook with this data.
     */
    create: XOR<LogbookCreateInput, LogbookUncheckedCreateInput>
    /**
     * In case the Logbook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogbookUpdateInput, LogbookUncheckedUpdateInput>
  }

  /**
   * Logbook delete
   */
  export type LogbookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
    /**
     * Filter which Logbook to delete.
     */
    where: LogbookWhereUniqueInput
  }

  /**
   * Logbook deleteMany
   */
  export type LogbookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logbooks to delete
     */
    where?: LogbookWhereInput
    /**
     * Limit how many Logbooks to delete.
     */
    limit?: number
  }

  /**
   * Logbook.kegiatan
   */
  export type Logbook$kegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    where?: KegiatanWhereInput
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    cursor?: KegiatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * Logbook.Pengguna
   */
  export type Logbook$PenggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    where?: PenggunaWhereInput
  }

  /**
   * Logbook without action
   */
  export type LogbookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logbook
     */
    select?: LogbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logbook
     */
    omit?: LogbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogbookInclude<ExtArgs> | null
  }


  /**
   * Model RiwayatPerubahanPembimbing
   */

  export type AggregateRiwayatPerubahanPembimbing = {
    _count: RiwayatPerubahanPembimbingCountAggregateOutputType | null
    _min: RiwayatPerubahanPembimbingMinAggregateOutputType | null
    _max: RiwayatPerubahanPembimbingMaxAggregateOutputType | null
  }

  export type RiwayatPerubahanPembimbingMinAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    alasan: string | null
    pembimbingIdLama: string | null
    promotorIdLama: string | null
    koPromotorIdLama: string | null
    pembimbingIdBaru: string | null
    promotorIdBaru: string | null
    koPromotorIdBaru: string | null
    changedAt: Date | null
  }

  export type RiwayatPerubahanPembimbingMaxAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    alasan: string | null
    pembimbingIdLama: string | null
    promotorIdLama: string | null
    koPromotorIdLama: string | null
    pembimbingIdBaru: string | null
    promotorIdBaru: string | null
    koPromotorIdBaru: string | null
    changedAt: Date | null
  }

  export type RiwayatPerubahanPembimbingCountAggregateOutputType = {
    id: number
    mahasiswaId: number
    alasan: number
    pembimbingIdLama: number
    promotorIdLama: number
    koPromotorIdLama: number
    pembimbingIdBaru: number
    promotorIdBaru: number
    koPromotorIdBaru: number
    changedAt: number
    _all: number
  }


  export type RiwayatPerubahanPembimbingMinAggregateInputType = {
    id?: true
    mahasiswaId?: true
    alasan?: true
    pembimbingIdLama?: true
    promotorIdLama?: true
    koPromotorIdLama?: true
    pembimbingIdBaru?: true
    promotorIdBaru?: true
    koPromotorIdBaru?: true
    changedAt?: true
  }

  export type RiwayatPerubahanPembimbingMaxAggregateInputType = {
    id?: true
    mahasiswaId?: true
    alasan?: true
    pembimbingIdLama?: true
    promotorIdLama?: true
    koPromotorIdLama?: true
    pembimbingIdBaru?: true
    promotorIdBaru?: true
    koPromotorIdBaru?: true
    changedAt?: true
  }

  export type RiwayatPerubahanPembimbingCountAggregateInputType = {
    id?: true
    mahasiswaId?: true
    alasan?: true
    pembimbingIdLama?: true
    promotorIdLama?: true
    koPromotorIdLama?: true
    pembimbingIdBaru?: true
    promotorIdBaru?: true
    koPromotorIdBaru?: true
    changedAt?: true
    _all?: true
  }

  export type RiwayatPerubahanPembimbingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiwayatPerubahanPembimbing to aggregate.
     */
    where?: RiwayatPerubahanPembimbingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiwayatPerubahanPembimbings to fetch.
     */
    orderBy?: RiwayatPerubahanPembimbingOrderByWithRelationInput | RiwayatPerubahanPembimbingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiwayatPerubahanPembimbingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiwayatPerubahanPembimbings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiwayatPerubahanPembimbings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiwayatPerubahanPembimbings
    **/
    _count?: true | RiwayatPerubahanPembimbingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiwayatPerubahanPembimbingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiwayatPerubahanPembimbingMaxAggregateInputType
  }

  export type GetRiwayatPerubahanPembimbingAggregateType<T extends RiwayatPerubahanPembimbingAggregateArgs> = {
        [P in keyof T & keyof AggregateRiwayatPerubahanPembimbing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiwayatPerubahanPembimbing[P]>
      : GetScalarType<T[P], AggregateRiwayatPerubahanPembimbing[P]>
  }




  export type RiwayatPerubahanPembimbingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiwayatPerubahanPembimbingWhereInput
    orderBy?: RiwayatPerubahanPembimbingOrderByWithAggregationInput | RiwayatPerubahanPembimbingOrderByWithAggregationInput[]
    by: RiwayatPerubahanPembimbingScalarFieldEnum[] | RiwayatPerubahanPembimbingScalarFieldEnum
    having?: RiwayatPerubahanPembimbingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiwayatPerubahanPembimbingCountAggregateInputType | true
    _min?: RiwayatPerubahanPembimbingMinAggregateInputType
    _max?: RiwayatPerubahanPembimbingMaxAggregateInputType
  }

  export type RiwayatPerubahanPembimbingGroupByOutputType = {
    id: string
    mahasiswaId: string
    alasan: string
    pembimbingIdLama: string | null
    promotorIdLama: string | null
    koPromotorIdLama: string | null
    pembimbingIdBaru: string | null
    promotorIdBaru: string | null
    koPromotorIdBaru: string | null
    changedAt: Date
    _count: RiwayatPerubahanPembimbingCountAggregateOutputType | null
    _min: RiwayatPerubahanPembimbingMinAggregateOutputType | null
    _max: RiwayatPerubahanPembimbingMaxAggregateOutputType | null
  }

  type GetRiwayatPerubahanPembimbingGroupByPayload<T extends RiwayatPerubahanPembimbingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiwayatPerubahanPembimbingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiwayatPerubahanPembimbingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiwayatPerubahanPembimbingGroupByOutputType[P]>
            : GetScalarType<T[P], RiwayatPerubahanPembimbingGroupByOutputType[P]>
        }
      >
    >


  export type RiwayatPerubahanPembimbingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswaId?: boolean
    alasan?: boolean
    pembimbingIdLama?: boolean
    promotorIdLama?: boolean
    koPromotorIdLama?: boolean
    pembimbingIdBaru?: boolean
    promotorIdBaru?: boolean
    koPromotorIdBaru?: boolean
    changedAt?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riwayatPerubahanPembimbing"]>



  export type RiwayatPerubahanPembimbingSelectScalar = {
    id?: boolean
    mahasiswaId?: boolean
    alasan?: boolean
    pembimbingIdLama?: boolean
    promotorIdLama?: boolean
    koPromotorIdLama?: boolean
    pembimbingIdBaru?: boolean
    promotorIdBaru?: boolean
    koPromotorIdBaru?: boolean
    changedAt?: boolean
  }

  export type RiwayatPerubahanPembimbingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mahasiswaId" | "alasan" | "pembimbingIdLama" | "promotorIdLama" | "koPromotorIdLama" | "pembimbingIdBaru" | "promotorIdBaru" | "koPromotorIdBaru" | "changedAt", ExtArgs["result"]["riwayatPerubahanPembimbing"]>
  export type RiwayatPerubahanPembimbingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }

  export type $RiwayatPerubahanPembimbingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiwayatPerubahanPembimbing"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mahasiswaId: string
      alasan: string
      pembimbingIdLama: string | null
      promotorIdLama: string | null
      koPromotorIdLama: string | null
      pembimbingIdBaru: string | null
      promotorIdBaru: string | null
      koPromotorIdBaru: string | null
      changedAt: Date
    }, ExtArgs["result"]["riwayatPerubahanPembimbing"]>
    composites: {}
  }

  type RiwayatPerubahanPembimbingGetPayload<S extends boolean | null | undefined | RiwayatPerubahanPembimbingDefaultArgs> = $Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload, S>

  type RiwayatPerubahanPembimbingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiwayatPerubahanPembimbingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiwayatPerubahanPembimbingCountAggregateInputType | true
    }

  export interface RiwayatPerubahanPembimbingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiwayatPerubahanPembimbing'], meta: { name: 'RiwayatPerubahanPembimbing' } }
    /**
     * Find zero or one RiwayatPerubahanPembimbing that matches the filter.
     * @param {RiwayatPerubahanPembimbingFindUniqueArgs} args - Arguments to find a RiwayatPerubahanPembimbing
     * @example
     * // Get one RiwayatPerubahanPembimbing
     * const riwayatPerubahanPembimbing = await prisma.riwayatPerubahanPembimbing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiwayatPerubahanPembimbingFindUniqueArgs>(args: SelectSubset<T, RiwayatPerubahanPembimbingFindUniqueArgs<ExtArgs>>): Prisma__RiwayatPerubahanPembimbingClient<$Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiwayatPerubahanPembimbing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiwayatPerubahanPembimbingFindUniqueOrThrowArgs} args - Arguments to find a RiwayatPerubahanPembimbing
     * @example
     * // Get one RiwayatPerubahanPembimbing
     * const riwayatPerubahanPembimbing = await prisma.riwayatPerubahanPembimbing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiwayatPerubahanPembimbingFindUniqueOrThrowArgs>(args: SelectSubset<T, RiwayatPerubahanPembimbingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiwayatPerubahanPembimbingClient<$Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiwayatPerubahanPembimbing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiwayatPerubahanPembimbingFindFirstArgs} args - Arguments to find a RiwayatPerubahanPembimbing
     * @example
     * // Get one RiwayatPerubahanPembimbing
     * const riwayatPerubahanPembimbing = await prisma.riwayatPerubahanPembimbing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiwayatPerubahanPembimbingFindFirstArgs>(args?: SelectSubset<T, RiwayatPerubahanPembimbingFindFirstArgs<ExtArgs>>): Prisma__RiwayatPerubahanPembimbingClient<$Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiwayatPerubahanPembimbing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiwayatPerubahanPembimbingFindFirstOrThrowArgs} args - Arguments to find a RiwayatPerubahanPembimbing
     * @example
     * // Get one RiwayatPerubahanPembimbing
     * const riwayatPerubahanPembimbing = await prisma.riwayatPerubahanPembimbing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiwayatPerubahanPembimbingFindFirstOrThrowArgs>(args?: SelectSubset<T, RiwayatPerubahanPembimbingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiwayatPerubahanPembimbingClient<$Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiwayatPerubahanPembimbings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiwayatPerubahanPembimbingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiwayatPerubahanPembimbings
     * const riwayatPerubahanPembimbings = await prisma.riwayatPerubahanPembimbing.findMany()
     * 
     * // Get first 10 RiwayatPerubahanPembimbings
     * const riwayatPerubahanPembimbings = await prisma.riwayatPerubahanPembimbing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riwayatPerubahanPembimbingWithIdOnly = await prisma.riwayatPerubahanPembimbing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiwayatPerubahanPembimbingFindManyArgs>(args?: SelectSubset<T, RiwayatPerubahanPembimbingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiwayatPerubahanPembimbing.
     * @param {RiwayatPerubahanPembimbingCreateArgs} args - Arguments to create a RiwayatPerubahanPembimbing.
     * @example
     * // Create one RiwayatPerubahanPembimbing
     * const RiwayatPerubahanPembimbing = await prisma.riwayatPerubahanPembimbing.create({
     *   data: {
     *     // ... data to create a RiwayatPerubahanPembimbing
     *   }
     * })
     * 
     */
    create<T extends RiwayatPerubahanPembimbingCreateArgs>(args: SelectSubset<T, RiwayatPerubahanPembimbingCreateArgs<ExtArgs>>): Prisma__RiwayatPerubahanPembimbingClient<$Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiwayatPerubahanPembimbings.
     * @param {RiwayatPerubahanPembimbingCreateManyArgs} args - Arguments to create many RiwayatPerubahanPembimbings.
     * @example
     * // Create many RiwayatPerubahanPembimbings
     * const riwayatPerubahanPembimbing = await prisma.riwayatPerubahanPembimbing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiwayatPerubahanPembimbingCreateManyArgs>(args?: SelectSubset<T, RiwayatPerubahanPembimbingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RiwayatPerubahanPembimbing.
     * @param {RiwayatPerubahanPembimbingDeleteArgs} args - Arguments to delete one RiwayatPerubahanPembimbing.
     * @example
     * // Delete one RiwayatPerubahanPembimbing
     * const RiwayatPerubahanPembimbing = await prisma.riwayatPerubahanPembimbing.delete({
     *   where: {
     *     // ... filter to delete one RiwayatPerubahanPembimbing
     *   }
     * })
     * 
     */
    delete<T extends RiwayatPerubahanPembimbingDeleteArgs>(args: SelectSubset<T, RiwayatPerubahanPembimbingDeleteArgs<ExtArgs>>): Prisma__RiwayatPerubahanPembimbingClient<$Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiwayatPerubahanPembimbing.
     * @param {RiwayatPerubahanPembimbingUpdateArgs} args - Arguments to update one RiwayatPerubahanPembimbing.
     * @example
     * // Update one RiwayatPerubahanPembimbing
     * const riwayatPerubahanPembimbing = await prisma.riwayatPerubahanPembimbing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiwayatPerubahanPembimbingUpdateArgs>(args: SelectSubset<T, RiwayatPerubahanPembimbingUpdateArgs<ExtArgs>>): Prisma__RiwayatPerubahanPembimbingClient<$Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiwayatPerubahanPembimbings.
     * @param {RiwayatPerubahanPembimbingDeleteManyArgs} args - Arguments to filter RiwayatPerubahanPembimbings to delete.
     * @example
     * // Delete a few RiwayatPerubahanPembimbings
     * const { count } = await prisma.riwayatPerubahanPembimbing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiwayatPerubahanPembimbingDeleteManyArgs>(args?: SelectSubset<T, RiwayatPerubahanPembimbingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiwayatPerubahanPembimbings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiwayatPerubahanPembimbingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiwayatPerubahanPembimbings
     * const riwayatPerubahanPembimbing = await prisma.riwayatPerubahanPembimbing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiwayatPerubahanPembimbingUpdateManyArgs>(args: SelectSubset<T, RiwayatPerubahanPembimbingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RiwayatPerubahanPembimbing.
     * @param {RiwayatPerubahanPembimbingUpsertArgs} args - Arguments to update or create a RiwayatPerubahanPembimbing.
     * @example
     * // Update or create a RiwayatPerubahanPembimbing
     * const riwayatPerubahanPembimbing = await prisma.riwayatPerubahanPembimbing.upsert({
     *   create: {
     *     // ... data to create a RiwayatPerubahanPembimbing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiwayatPerubahanPembimbing we want to update
     *   }
     * })
     */
    upsert<T extends RiwayatPerubahanPembimbingUpsertArgs>(args: SelectSubset<T, RiwayatPerubahanPembimbingUpsertArgs<ExtArgs>>): Prisma__RiwayatPerubahanPembimbingClient<$Result.GetResult<Prisma.$RiwayatPerubahanPembimbingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiwayatPerubahanPembimbings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiwayatPerubahanPembimbingCountArgs} args - Arguments to filter RiwayatPerubahanPembimbings to count.
     * @example
     * // Count the number of RiwayatPerubahanPembimbings
     * const count = await prisma.riwayatPerubahanPembimbing.count({
     *   where: {
     *     // ... the filter for the RiwayatPerubahanPembimbings we want to count
     *   }
     * })
    **/
    count<T extends RiwayatPerubahanPembimbingCountArgs>(
      args?: Subset<T, RiwayatPerubahanPembimbingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiwayatPerubahanPembimbingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiwayatPerubahanPembimbing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiwayatPerubahanPembimbingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiwayatPerubahanPembimbingAggregateArgs>(args: Subset<T, RiwayatPerubahanPembimbingAggregateArgs>): Prisma.PrismaPromise<GetRiwayatPerubahanPembimbingAggregateType<T>>

    /**
     * Group by RiwayatPerubahanPembimbing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiwayatPerubahanPembimbingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiwayatPerubahanPembimbingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiwayatPerubahanPembimbingGroupByArgs['orderBy'] }
        : { orderBy?: RiwayatPerubahanPembimbingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiwayatPerubahanPembimbingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiwayatPerubahanPembimbingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiwayatPerubahanPembimbing model
   */
  readonly fields: RiwayatPerubahanPembimbingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiwayatPerubahanPembimbing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiwayatPerubahanPembimbingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RiwayatPerubahanPembimbing model
   */
  interface RiwayatPerubahanPembimbingFieldRefs {
    readonly id: FieldRef<"RiwayatPerubahanPembimbing", 'String'>
    readonly mahasiswaId: FieldRef<"RiwayatPerubahanPembimbing", 'String'>
    readonly alasan: FieldRef<"RiwayatPerubahanPembimbing", 'String'>
    readonly pembimbingIdLama: FieldRef<"RiwayatPerubahanPembimbing", 'String'>
    readonly promotorIdLama: FieldRef<"RiwayatPerubahanPembimbing", 'String'>
    readonly koPromotorIdLama: FieldRef<"RiwayatPerubahanPembimbing", 'String'>
    readonly pembimbingIdBaru: FieldRef<"RiwayatPerubahanPembimbing", 'String'>
    readonly promotorIdBaru: FieldRef<"RiwayatPerubahanPembimbing", 'String'>
    readonly koPromotorIdBaru: FieldRef<"RiwayatPerubahanPembimbing", 'String'>
    readonly changedAt: FieldRef<"RiwayatPerubahanPembimbing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiwayatPerubahanPembimbing findUnique
   */
  export type RiwayatPerubahanPembimbingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
    /**
     * Filter, which RiwayatPerubahanPembimbing to fetch.
     */
    where: RiwayatPerubahanPembimbingWhereUniqueInput
  }

  /**
   * RiwayatPerubahanPembimbing findUniqueOrThrow
   */
  export type RiwayatPerubahanPembimbingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
    /**
     * Filter, which RiwayatPerubahanPembimbing to fetch.
     */
    where: RiwayatPerubahanPembimbingWhereUniqueInput
  }

  /**
   * RiwayatPerubahanPembimbing findFirst
   */
  export type RiwayatPerubahanPembimbingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
    /**
     * Filter, which RiwayatPerubahanPembimbing to fetch.
     */
    where?: RiwayatPerubahanPembimbingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiwayatPerubahanPembimbings to fetch.
     */
    orderBy?: RiwayatPerubahanPembimbingOrderByWithRelationInput | RiwayatPerubahanPembimbingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiwayatPerubahanPembimbings.
     */
    cursor?: RiwayatPerubahanPembimbingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiwayatPerubahanPembimbings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiwayatPerubahanPembimbings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiwayatPerubahanPembimbings.
     */
    distinct?: RiwayatPerubahanPembimbingScalarFieldEnum | RiwayatPerubahanPembimbingScalarFieldEnum[]
  }

  /**
   * RiwayatPerubahanPembimbing findFirstOrThrow
   */
  export type RiwayatPerubahanPembimbingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
    /**
     * Filter, which RiwayatPerubahanPembimbing to fetch.
     */
    where?: RiwayatPerubahanPembimbingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiwayatPerubahanPembimbings to fetch.
     */
    orderBy?: RiwayatPerubahanPembimbingOrderByWithRelationInput | RiwayatPerubahanPembimbingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiwayatPerubahanPembimbings.
     */
    cursor?: RiwayatPerubahanPembimbingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiwayatPerubahanPembimbings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiwayatPerubahanPembimbings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiwayatPerubahanPembimbings.
     */
    distinct?: RiwayatPerubahanPembimbingScalarFieldEnum | RiwayatPerubahanPembimbingScalarFieldEnum[]
  }

  /**
   * RiwayatPerubahanPembimbing findMany
   */
  export type RiwayatPerubahanPembimbingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
    /**
     * Filter, which RiwayatPerubahanPembimbings to fetch.
     */
    where?: RiwayatPerubahanPembimbingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiwayatPerubahanPembimbings to fetch.
     */
    orderBy?: RiwayatPerubahanPembimbingOrderByWithRelationInput | RiwayatPerubahanPembimbingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiwayatPerubahanPembimbings.
     */
    cursor?: RiwayatPerubahanPembimbingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiwayatPerubahanPembimbings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiwayatPerubahanPembimbings.
     */
    skip?: number
    distinct?: RiwayatPerubahanPembimbingScalarFieldEnum | RiwayatPerubahanPembimbingScalarFieldEnum[]
  }

  /**
   * RiwayatPerubahanPembimbing create
   */
  export type RiwayatPerubahanPembimbingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
    /**
     * The data needed to create a RiwayatPerubahanPembimbing.
     */
    data: XOR<RiwayatPerubahanPembimbingCreateInput, RiwayatPerubahanPembimbingUncheckedCreateInput>
  }

  /**
   * RiwayatPerubahanPembimbing createMany
   */
  export type RiwayatPerubahanPembimbingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiwayatPerubahanPembimbings.
     */
    data: RiwayatPerubahanPembimbingCreateManyInput | RiwayatPerubahanPembimbingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiwayatPerubahanPembimbing update
   */
  export type RiwayatPerubahanPembimbingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
    /**
     * The data needed to update a RiwayatPerubahanPembimbing.
     */
    data: XOR<RiwayatPerubahanPembimbingUpdateInput, RiwayatPerubahanPembimbingUncheckedUpdateInput>
    /**
     * Choose, which RiwayatPerubahanPembimbing to update.
     */
    where: RiwayatPerubahanPembimbingWhereUniqueInput
  }

  /**
   * RiwayatPerubahanPembimbing updateMany
   */
  export type RiwayatPerubahanPembimbingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiwayatPerubahanPembimbings.
     */
    data: XOR<RiwayatPerubahanPembimbingUpdateManyMutationInput, RiwayatPerubahanPembimbingUncheckedUpdateManyInput>
    /**
     * Filter which RiwayatPerubahanPembimbings to update
     */
    where?: RiwayatPerubahanPembimbingWhereInput
    /**
     * Limit how many RiwayatPerubahanPembimbings to update.
     */
    limit?: number
  }

  /**
   * RiwayatPerubahanPembimbing upsert
   */
  export type RiwayatPerubahanPembimbingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
    /**
     * The filter to search for the RiwayatPerubahanPembimbing to update in case it exists.
     */
    where: RiwayatPerubahanPembimbingWhereUniqueInput
    /**
     * In case the RiwayatPerubahanPembimbing found by the `where` argument doesn't exist, create a new RiwayatPerubahanPembimbing with this data.
     */
    create: XOR<RiwayatPerubahanPembimbingCreateInput, RiwayatPerubahanPembimbingUncheckedCreateInput>
    /**
     * In case the RiwayatPerubahanPembimbing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiwayatPerubahanPembimbingUpdateInput, RiwayatPerubahanPembimbingUncheckedUpdateInput>
  }

  /**
   * RiwayatPerubahanPembimbing delete
   */
  export type RiwayatPerubahanPembimbingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
    /**
     * Filter which RiwayatPerubahanPembimbing to delete.
     */
    where: RiwayatPerubahanPembimbingWhereUniqueInput
  }

  /**
   * RiwayatPerubahanPembimbing deleteMany
   */
  export type RiwayatPerubahanPembimbingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiwayatPerubahanPembimbings to delete
     */
    where?: RiwayatPerubahanPembimbingWhereInput
    /**
     * Limit how many RiwayatPerubahanPembimbings to delete.
     */
    limit?: number
  }

  /**
   * RiwayatPerubahanPembimbing without action
   */
  export type RiwayatPerubahanPembimbingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiwayatPerubahanPembimbing
     */
    select?: RiwayatPerubahanPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiwayatPerubahanPembimbing
     */
    omit?: RiwayatPerubahanPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiwayatPerubahanPembimbingInclude<ExtArgs> | null
  }


  /**
   * Model Kegiatan
   */

  export type AggregateKegiatan = {
    _count: KegiatanCountAggregateOutputType | null
    _avg: KegiatanAvgAggregateOutputType | null
    _sum: KegiatanSumAggregateOutputType | null
    _min: KegiatanMinAggregateOutputType | null
    _max: KegiatanMaxAggregateOutputType | null
  }

  export type KegiatanAvgAggregateOutputType = {
    mataKuliahId: number | null
  }

  export type KegiatanSumAggregateOutputType = {
    mataKuliahId: number | null
  }

  export type KegiatanMinAggregateOutputType = {
    id: string | null
    logbookId: string | null
    mataKuliahId: number | null
    status: string | null
    alasanDitolak: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KegiatanMaxAggregateOutputType = {
    id: string | null
    logbookId: string | null
    mataKuliahId: number | null
    status: string | null
    alasanDitolak: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KegiatanCountAggregateOutputType = {
    id: number
    logbookId: number
    mataKuliahId: number
    fieldsData: number
    status: number
    alasanDitolak: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KegiatanAvgAggregateInputType = {
    mataKuliahId?: true
  }

  export type KegiatanSumAggregateInputType = {
    mataKuliahId?: true
  }

  export type KegiatanMinAggregateInputType = {
    id?: true
    logbookId?: true
    mataKuliahId?: true
    status?: true
    alasanDitolak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KegiatanMaxAggregateInputType = {
    id?: true
    logbookId?: true
    mataKuliahId?: true
    status?: true
    alasanDitolak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KegiatanCountAggregateInputType = {
    id?: true
    logbookId?: true
    mataKuliahId?: true
    fieldsData?: true
    status?: true
    alasanDitolak?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KegiatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kegiatan to aggregate.
     */
    where?: KegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kegiatans
    **/
    _count?: true | KegiatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KegiatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KegiatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KegiatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KegiatanMaxAggregateInputType
  }

  export type GetKegiatanAggregateType<T extends KegiatanAggregateArgs> = {
        [P in keyof T & keyof AggregateKegiatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKegiatan[P]>
      : GetScalarType<T[P], AggregateKegiatan[P]>
  }




  export type KegiatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KegiatanWhereInput
    orderBy?: KegiatanOrderByWithAggregationInput | KegiatanOrderByWithAggregationInput[]
    by: KegiatanScalarFieldEnum[] | KegiatanScalarFieldEnum
    having?: KegiatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KegiatanCountAggregateInputType | true
    _avg?: KegiatanAvgAggregateInputType
    _sum?: KegiatanSumAggregateInputType
    _min?: KegiatanMinAggregateInputType
    _max?: KegiatanMaxAggregateInputType
  }

  export type KegiatanGroupByOutputType = {
    id: string
    logbookId: string
    mataKuliahId: number
    fieldsData: JsonValue | null
    status: string
    alasanDitolak: string | null
    createdAt: Date
    updatedAt: Date
    _count: KegiatanCountAggregateOutputType | null
    _avg: KegiatanAvgAggregateOutputType | null
    _sum: KegiatanSumAggregateOutputType | null
    _min: KegiatanMinAggregateOutputType | null
    _max: KegiatanMaxAggregateOutputType | null
  }

  type GetKegiatanGroupByPayload<T extends KegiatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KegiatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KegiatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KegiatanGroupByOutputType[P]>
            : GetScalarType<T[P], KegiatanGroupByOutputType[P]>
        }
      >
    >


  export type KegiatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logbookId?: boolean
    mataKuliahId?: boolean
    fieldsData?: boolean
    status?: boolean
    alasanDitolak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logbook?: boolean | LogbookDefaultArgs<ExtArgs>
    MataKuliah?: boolean | MataKuliahDefaultArgs<ExtArgs>
    lampiran?: boolean | Kegiatan$lampiranArgs<ExtArgs>
    _count?: boolean | KegiatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kegiatan"]>



  export type KegiatanSelectScalar = {
    id?: boolean
    logbookId?: boolean
    mataKuliahId?: boolean
    fieldsData?: boolean
    status?: boolean
    alasanDitolak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KegiatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logbookId" | "mataKuliahId" | "fieldsData" | "status" | "alasanDitolak" | "createdAt" | "updatedAt", ExtArgs["result"]["kegiatan"]>
  export type KegiatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logbook?: boolean | LogbookDefaultArgs<ExtArgs>
    MataKuliah?: boolean | MataKuliahDefaultArgs<ExtArgs>
    lampiran?: boolean | Kegiatan$lampiranArgs<ExtArgs>
    _count?: boolean | KegiatanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KegiatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kegiatan"
    objects: {
      logbook: Prisma.$LogbookPayload<ExtArgs>
      MataKuliah: Prisma.$MataKuliahPayload<ExtArgs>
      lampiran: Prisma.$LampiranPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logbookId: string
      mataKuliahId: number
      fieldsData: Prisma.JsonValue | null
      status: string
      alasanDitolak: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kegiatan"]>
    composites: {}
  }

  type KegiatanGetPayload<S extends boolean | null | undefined | KegiatanDefaultArgs> = $Result.GetResult<Prisma.$KegiatanPayload, S>

  type KegiatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KegiatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KegiatanCountAggregateInputType | true
    }

  export interface KegiatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kegiatan'], meta: { name: 'Kegiatan' } }
    /**
     * Find zero or one Kegiatan that matches the filter.
     * @param {KegiatanFindUniqueArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KegiatanFindUniqueArgs>(args: SelectSubset<T, KegiatanFindUniqueArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kegiatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KegiatanFindUniqueOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KegiatanFindUniqueOrThrowArgs>(args: SelectSubset<T, KegiatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kegiatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanFindFirstArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KegiatanFindFirstArgs>(args?: SelectSubset<T, KegiatanFindFirstArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kegiatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanFindFirstOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KegiatanFindFirstOrThrowArgs>(args?: SelectSubset<T, KegiatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kegiatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany()
     * 
     * // Get first 10 Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kegiatanWithIdOnly = await prisma.kegiatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KegiatanFindManyArgs>(args?: SelectSubset<T, KegiatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kegiatan.
     * @param {KegiatanCreateArgs} args - Arguments to create a Kegiatan.
     * @example
     * // Create one Kegiatan
     * const Kegiatan = await prisma.kegiatan.create({
     *   data: {
     *     // ... data to create a Kegiatan
     *   }
     * })
     * 
     */
    create<T extends KegiatanCreateArgs>(args: SelectSubset<T, KegiatanCreateArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kegiatans.
     * @param {KegiatanCreateManyArgs} args - Arguments to create many Kegiatans.
     * @example
     * // Create many Kegiatans
     * const kegiatan = await prisma.kegiatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KegiatanCreateManyArgs>(args?: SelectSubset<T, KegiatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kegiatan.
     * @param {KegiatanDeleteArgs} args - Arguments to delete one Kegiatan.
     * @example
     * // Delete one Kegiatan
     * const Kegiatan = await prisma.kegiatan.delete({
     *   where: {
     *     // ... filter to delete one Kegiatan
     *   }
     * })
     * 
     */
    delete<T extends KegiatanDeleteArgs>(args: SelectSubset<T, KegiatanDeleteArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kegiatan.
     * @param {KegiatanUpdateArgs} args - Arguments to update one Kegiatan.
     * @example
     * // Update one Kegiatan
     * const kegiatan = await prisma.kegiatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KegiatanUpdateArgs>(args: SelectSubset<T, KegiatanUpdateArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kegiatans.
     * @param {KegiatanDeleteManyArgs} args - Arguments to filter Kegiatans to delete.
     * @example
     * // Delete a few Kegiatans
     * const { count } = await prisma.kegiatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KegiatanDeleteManyArgs>(args?: SelectSubset<T, KegiatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kegiatans
     * const kegiatan = await prisma.kegiatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KegiatanUpdateManyArgs>(args: SelectSubset<T, KegiatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kegiatan.
     * @param {KegiatanUpsertArgs} args - Arguments to update or create a Kegiatan.
     * @example
     * // Update or create a Kegiatan
     * const kegiatan = await prisma.kegiatan.upsert({
     *   create: {
     *     // ... data to create a Kegiatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kegiatan we want to update
     *   }
     * })
     */
    upsert<T extends KegiatanUpsertArgs>(args: SelectSubset<T, KegiatanUpsertArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanCountArgs} args - Arguments to filter Kegiatans to count.
     * @example
     * // Count the number of Kegiatans
     * const count = await prisma.kegiatan.count({
     *   where: {
     *     // ... the filter for the Kegiatans we want to count
     *   }
     * })
    **/
    count<T extends KegiatanCountArgs>(
      args?: Subset<T, KegiatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KegiatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KegiatanAggregateArgs>(args: Subset<T, KegiatanAggregateArgs>): Prisma.PrismaPromise<GetKegiatanAggregateType<T>>

    /**
     * Group by Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KegiatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KegiatanGroupByArgs['orderBy'] }
        : { orderBy?: KegiatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KegiatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKegiatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kegiatan model
   */
  readonly fields: KegiatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kegiatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KegiatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logbook<T extends LogbookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LogbookDefaultArgs<ExtArgs>>): Prisma__LogbookClient<$Result.GetResult<Prisma.$LogbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MataKuliah<T extends MataKuliahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MataKuliahDefaultArgs<ExtArgs>>): Prisma__MataKuliahClient<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lampiran<T extends Kegiatan$lampiranArgs<ExtArgs> = {}>(args?: Subset<T, Kegiatan$lampiranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LampiranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kegiatan model
   */
  interface KegiatanFieldRefs {
    readonly id: FieldRef<"Kegiatan", 'String'>
    readonly logbookId: FieldRef<"Kegiatan", 'String'>
    readonly mataKuliahId: FieldRef<"Kegiatan", 'Int'>
    readonly fieldsData: FieldRef<"Kegiatan", 'Json'>
    readonly status: FieldRef<"Kegiatan", 'String'>
    readonly alasanDitolak: FieldRef<"Kegiatan", 'String'>
    readonly createdAt: FieldRef<"Kegiatan", 'DateTime'>
    readonly updatedAt: FieldRef<"Kegiatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kegiatan findUnique
   */
  export type KegiatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter, which Kegiatan to fetch.
     */
    where: KegiatanWhereUniqueInput
  }

  /**
   * Kegiatan findUniqueOrThrow
   */
  export type KegiatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter, which Kegiatan to fetch.
     */
    where: KegiatanWhereUniqueInput
  }

  /**
   * Kegiatan findFirst
   */
  export type KegiatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter, which Kegiatan to fetch.
     */
    where?: KegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kegiatans.
     */
    cursor?: KegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kegiatans.
     */
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * Kegiatan findFirstOrThrow
   */
  export type KegiatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter, which Kegiatan to fetch.
     */
    where?: KegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kegiatans.
     */
    cursor?: KegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kegiatans.
     */
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * Kegiatan findMany
   */
  export type KegiatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter, which Kegiatans to fetch.
     */
    where?: KegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kegiatans.
     */
    cursor?: KegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kegiatans.
     */
    skip?: number
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * Kegiatan create
   */
  export type KegiatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * The data needed to create a Kegiatan.
     */
    data: XOR<KegiatanCreateInput, KegiatanUncheckedCreateInput>
  }

  /**
   * Kegiatan createMany
   */
  export type KegiatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kegiatans.
     */
    data: KegiatanCreateManyInput | KegiatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kegiatan update
   */
  export type KegiatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * The data needed to update a Kegiatan.
     */
    data: XOR<KegiatanUpdateInput, KegiatanUncheckedUpdateInput>
    /**
     * Choose, which Kegiatan to update.
     */
    where: KegiatanWhereUniqueInput
  }

  /**
   * Kegiatan updateMany
   */
  export type KegiatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kegiatans.
     */
    data: XOR<KegiatanUpdateManyMutationInput, KegiatanUncheckedUpdateManyInput>
    /**
     * Filter which Kegiatans to update
     */
    where?: KegiatanWhereInput
    /**
     * Limit how many Kegiatans to update.
     */
    limit?: number
  }

  /**
   * Kegiatan upsert
   */
  export type KegiatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * The filter to search for the Kegiatan to update in case it exists.
     */
    where: KegiatanWhereUniqueInput
    /**
     * In case the Kegiatan found by the `where` argument doesn't exist, create a new Kegiatan with this data.
     */
    create: XOR<KegiatanCreateInput, KegiatanUncheckedCreateInput>
    /**
     * In case the Kegiatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KegiatanUpdateInput, KegiatanUncheckedUpdateInput>
  }

  /**
   * Kegiatan delete
   */
  export type KegiatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter which Kegiatan to delete.
     */
    where: KegiatanWhereUniqueInput
  }

  /**
   * Kegiatan deleteMany
   */
  export type KegiatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kegiatans to delete
     */
    where?: KegiatanWhereInput
    /**
     * Limit how many Kegiatans to delete.
     */
    limit?: number
  }

  /**
   * Kegiatan.lampiran
   */
  export type Kegiatan$lampiranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
    where?: LampiranWhereInput
    orderBy?: LampiranOrderByWithRelationInput | LampiranOrderByWithRelationInput[]
    cursor?: LampiranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LampiranScalarFieldEnum | LampiranScalarFieldEnum[]
  }

  /**
   * Kegiatan without action
   */
  export type KegiatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
  }


  /**
   * Model MataKuliah
   */

  export type AggregateMataKuliah = {
    _count: MataKuliahCountAggregateOutputType | null
    _avg: MataKuliahAvgAggregateOutputType | null
    _sum: MataKuliahSumAggregateOutputType | null
    _min: MataKuliahMinAggregateOutputType | null
    _max: MataKuliahMaxAggregateOutputType | null
  }

  export type MataKuliahAvgAggregateOutputType = {
    id: number | null
    semester: number | null
  }

  export type MataKuliahSumAggregateOutputType = {
    id: number | null
    semester: number | null
  }

  export type MataKuliahMinAggregateOutputType = {
    id: number | null
    judul: string | null
    semester: number | null
    createdAt: Date | null
    updatedAt: Date | null
    programStudiId: string | null
  }

  export type MataKuliahMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    semester: number | null
    createdAt: Date | null
    updatedAt: Date | null
    programStudiId: string | null
  }

  export type MataKuliahCountAggregateOutputType = {
    id: number
    judul: number
    semester: number
    createdAt: number
    updatedAt: number
    programStudiId: number
    _all: number
  }


  export type MataKuliahAvgAggregateInputType = {
    id?: true
    semester?: true
  }

  export type MataKuliahSumAggregateInputType = {
    id?: true
    semester?: true
  }

  export type MataKuliahMinAggregateInputType = {
    id?: true
    judul?: true
    semester?: true
    createdAt?: true
    updatedAt?: true
    programStudiId?: true
  }

  export type MataKuliahMaxAggregateInputType = {
    id?: true
    judul?: true
    semester?: true
    createdAt?: true
    updatedAt?: true
    programStudiId?: true
  }

  export type MataKuliahCountAggregateInputType = {
    id?: true
    judul?: true
    semester?: true
    createdAt?: true
    updatedAt?: true
    programStudiId?: true
    _all?: true
  }

  export type MataKuliahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MataKuliah to aggregate.
     */
    where?: MataKuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataKuliahs to fetch.
     */
    orderBy?: MataKuliahOrderByWithRelationInput | MataKuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MataKuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataKuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataKuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MataKuliahs
    **/
    _count?: true | MataKuliahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MataKuliahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MataKuliahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MataKuliahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MataKuliahMaxAggregateInputType
  }

  export type GetMataKuliahAggregateType<T extends MataKuliahAggregateArgs> = {
        [P in keyof T & keyof AggregateMataKuliah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMataKuliah[P]>
      : GetScalarType<T[P], AggregateMataKuliah[P]>
  }




  export type MataKuliahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MataKuliahWhereInput
    orderBy?: MataKuliahOrderByWithAggregationInput | MataKuliahOrderByWithAggregationInput[]
    by: MataKuliahScalarFieldEnum[] | MataKuliahScalarFieldEnum
    having?: MataKuliahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MataKuliahCountAggregateInputType | true
    _avg?: MataKuliahAvgAggregateInputType
    _sum?: MataKuliahSumAggregateInputType
    _min?: MataKuliahMinAggregateInputType
    _max?: MataKuliahMaxAggregateInputType
  }

  export type MataKuliahGroupByOutputType = {
    id: number
    judul: string
    semester: number
    createdAt: Date
    updatedAt: Date
    programStudiId: string | null
    _count: MataKuliahCountAggregateOutputType | null
    _avg: MataKuliahAvgAggregateOutputType | null
    _sum: MataKuliahSumAggregateOutputType | null
    _min: MataKuliahMinAggregateOutputType | null
    _max: MataKuliahMaxAggregateOutputType | null
  }

  type GetMataKuliahGroupByPayload<T extends MataKuliahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MataKuliahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MataKuliahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MataKuliahGroupByOutputType[P]>
            : GetScalarType<T[P], MataKuliahGroupByOutputType[P]>
        }
      >
    >


  export type MataKuliahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    semester?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    programStudiId?: boolean
    kegiatan?: boolean | MataKuliah$kegiatanArgs<ExtArgs>
    ProgramStudi?: boolean | MataKuliah$ProgramStudiArgs<ExtArgs>
    _count?: boolean | MataKuliahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mataKuliah"]>



  export type MataKuliahSelectScalar = {
    id?: boolean
    judul?: boolean
    semester?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    programStudiId?: boolean
  }

  export type MataKuliahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "semester" | "createdAt" | "updatedAt" | "programStudiId", ExtArgs["result"]["mataKuliah"]>
  export type MataKuliahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | MataKuliah$kegiatanArgs<ExtArgs>
    ProgramStudi?: boolean | MataKuliah$ProgramStudiArgs<ExtArgs>
    _count?: boolean | MataKuliahCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MataKuliahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MataKuliah"
    objects: {
      kegiatan: Prisma.$KegiatanPayload<ExtArgs>[]
      ProgramStudi: Prisma.$ProgramStudiPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      semester: number
      createdAt: Date
      updatedAt: Date
      programStudiId: string | null
    }, ExtArgs["result"]["mataKuliah"]>
    composites: {}
  }

  type MataKuliahGetPayload<S extends boolean | null | undefined | MataKuliahDefaultArgs> = $Result.GetResult<Prisma.$MataKuliahPayload, S>

  type MataKuliahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MataKuliahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MataKuliahCountAggregateInputType | true
    }

  export interface MataKuliahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MataKuliah'], meta: { name: 'MataKuliah' } }
    /**
     * Find zero or one MataKuliah that matches the filter.
     * @param {MataKuliahFindUniqueArgs} args - Arguments to find a MataKuliah
     * @example
     * // Get one MataKuliah
     * const mataKuliah = await prisma.mataKuliah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MataKuliahFindUniqueArgs>(args: SelectSubset<T, MataKuliahFindUniqueArgs<ExtArgs>>): Prisma__MataKuliahClient<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MataKuliah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MataKuliahFindUniqueOrThrowArgs} args - Arguments to find a MataKuliah
     * @example
     * // Get one MataKuliah
     * const mataKuliah = await prisma.mataKuliah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MataKuliahFindUniqueOrThrowArgs>(args: SelectSubset<T, MataKuliahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MataKuliahClient<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MataKuliah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataKuliahFindFirstArgs} args - Arguments to find a MataKuliah
     * @example
     * // Get one MataKuliah
     * const mataKuliah = await prisma.mataKuliah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MataKuliahFindFirstArgs>(args?: SelectSubset<T, MataKuliahFindFirstArgs<ExtArgs>>): Prisma__MataKuliahClient<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MataKuliah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataKuliahFindFirstOrThrowArgs} args - Arguments to find a MataKuliah
     * @example
     * // Get one MataKuliah
     * const mataKuliah = await prisma.mataKuliah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MataKuliahFindFirstOrThrowArgs>(args?: SelectSubset<T, MataKuliahFindFirstOrThrowArgs<ExtArgs>>): Prisma__MataKuliahClient<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MataKuliahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataKuliahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MataKuliahs
     * const mataKuliahs = await prisma.mataKuliah.findMany()
     * 
     * // Get first 10 MataKuliahs
     * const mataKuliahs = await prisma.mataKuliah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mataKuliahWithIdOnly = await prisma.mataKuliah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MataKuliahFindManyArgs>(args?: SelectSubset<T, MataKuliahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MataKuliah.
     * @param {MataKuliahCreateArgs} args - Arguments to create a MataKuliah.
     * @example
     * // Create one MataKuliah
     * const MataKuliah = await prisma.mataKuliah.create({
     *   data: {
     *     // ... data to create a MataKuliah
     *   }
     * })
     * 
     */
    create<T extends MataKuliahCreateArgs>(args: SelectSubset<T, MataKuliahCreateArgs<ExtArgs>>): Prisma__MataKuliahClient<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MataKuliahs.
     * @param {MataKuliahCreateManyArgs} args - Arguments to create many MataKuliahs.
     * @example
     * // Create many MataKuliahs
     * const mataKuliah = await prisma.mataKuliah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MataKuliahCreateManyArgs>(args?: SelectSubset<T, MataKuliahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MataKuliah.
     * @param {MataKuliahDeleteArgs} args - Arguments to delete one MataKuliah.
     * @example
     * // Delete one MataKuliah
     * const MataKuliah = await prisma.mataKuliah.delete({
     *   where: {
     *     // ... filter to delete one MataKuliah
     *   }
     * })
     * 
     */
    delete<T extends MataKuliahDeleteArgs>(args: SelectSubset<T, MataKuliahDeleteArgs<ExtArgs>>): Prisma__MataKuliahClient<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MataKuliah.
     * @param {MataKuliahUpdateArgs} args - Arguments to update one MataKuliah.
     * @example
     * // Update one MataKuliah
     * const mataKuliah = await prisma.mataKuliah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MataKuliahUpdateArgs>(args: SelectSubset<T, MataKuliahUpdateArgs<ExtArgs>>): Prisma__MataKuliahClient<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MataKuliahs.
     * @param {MataKuliahDeleteManyArgs} args - Arguments to filter MataKuliahs to delete.
     * @example
     * // Delete a few MataKuliahs
     * const { count } = await prisma.mataKuliah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MataKuliahDeleteManyArgs>(args?: SelectSubset<T, MataKuliahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MataKuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataKuliahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MataKuliahs
     * const mataKuliah = await prisma.mataKuliah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MataKuliahUpdateManyArgs>(args: SelectSubset<T, MataKuliahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MataKuliah.
     * @param {MataKuliahUpsertArgs} args - Arguments to update or create a MataKuliah.
     * @example
     * // Update or create a MataKuliah
     * const mataKuliah = await prisma.mataKuliah.upsert({
     *   create: {
     *     // ... data to create a MataKuliah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MataKuliah we want to update
     *   }
     * })
     */
    upsert<T extends MataKuliahUpsertArgs>(args: SelectSubset<T, MataKuliahUpsertArgs<ExtArgs>>): Prisma__MataKuliahClient<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MataKuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataKuliahCountArgs} args - Arguments to filter MataKuliahs to count.
     * @example
     * // Count the number of MataKuliahs
     * const count = await prisma.mataKuliah.count({
     *   where: {
     *     // ... the filter for the MataKuliahs we want to count
     *   }
     * })
    **/
    count<T extends MataKuliahCountArgs>(
      args?: Subset<T, MataKuliahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MataKuliahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MataKuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataKuliahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MataKuliahAggregateArgs>(args: Subset<T, MataKuliahAggregateArgs>): Prisma.PrismaPromise<GetMataKuliahAggregateType<T>>

    /**
     * Group by MataKuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataKuliahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MataKuliahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MataKuliahGroupByArgs['orderBy'] }
        : { orderBy?: MataKuliahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MataKuliahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMataKuliahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MataKuliah model
   */
  readonly fields: MataKuliahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MataKuliah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MataKuliahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kegiatan<T extends MataKuliah$kegiatanArgs<ExtArgs> = {}>(args?: Subset<T, MataKuliah$kegiatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProgramStudi<T extends MataKuliah$ProgramStudiArgs<ExtArgs> = {}>(args?: Subset<T, MataKuliah$ProgramStudiArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MataKuliah model
   */
  interface MataKuliahFieldRefs {
    readonly id: FieldRef<"MataKuliah", 'Int'>
    readonly judul: FieldRef<"MataKuliah", 'String'>
    readonly semester: FieldRef<"MataKuliah", 'Int'>
    readonly createdAt: FieldRef<"MataKuliah", 'DateTime'>
    readonly updatedAt: FieldRef<"MataKuliah", 'DateTime'>
    readonly programStudiId: FieldRef<"MataKuliah", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MataKuliah findUnique
   */
  export type MataKuliahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
    /**
     * Filter, which MataKuliah to fetch.
     */
    where: MataKuliahWhereUniqueInput
  }

  /**
   * MataKuliah findUniqueOrThrow
   */
  export type MataKuliahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
    /**
     * Filter, which MataKuliah to fetch.
     */
    where: MataKuliahWhereUniqueInput
  }

  /**
   * MataKuliah findFirst
   */
  export type MataKuliahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
    /**
     * Filter, which MataKuliah to fetch.
     */
    where?: MataKuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataKuliahs to fetch.
     */
    orderBy?: MataKuliahOrderByWithRelationInput | MataKuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MataKuliahs.
     */
    cursor?: MataKuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataKuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataKuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MataKuliahs.
     */
    distinct?: MataKuliahScalarFieldEnum | MataKuliahScalarFieldEnum[]
  }

  /**
   * MataKuliah findFirstOrThrow
   */
  export type MataKuliahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
    /**
     * Filter, which MataKuliah to fetch.
     */
    where?: MataKuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataKuliahs to fetch.
     */
    orderBy?: MataKuliahOrderByWithRelationInput | MataKuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MataKuliahs.
     */
    cursor?: MataKuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataKuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataKuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MataKuliahs.
     */
    distinct?: MataKuliahScalarFieldEnum | MataKuliahScalarFieldEnum[]
  }

  /**
   * MataKuliah findMany
   */
  export type MataKuliahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
    /**
     * Filter, which MataKuliahs to fetch.
     */
    where?: MataKuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataKuliahs to fetch.
     */
    orderBy?: MataKuliahOrderByWithRelationInput | MataKuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MataKuliahs.
     */
    cursor?: MataKuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataKuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataKuliahs.
     */
    skip?: number
    distinct?: MataKuliahScalarFieldEnum | MataKuliahScalarFieldEnum[]
  }

  /**
   * MataKuliah create
   */
  export type MataKuliahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
    /**
     * The data needed to create a MataKuliah.
     */
    data: XOR<MataKuliahCreateInput, MataKuliahUncheckedCreateInput>
  }

  /**
   * MataKuliah createMany
   */
  export type MataKuliahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MataKuliahs.
     */
    data: MataKuliahCreateManyInput | MataKuliahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MataKuliah update
   */
  export type MataKuliahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
    /**
     * The data needed to update a MataKuliah.
     */
    data: XOR<MataKuliahUpdateInput, MataKuliahUncheckedUpdateInput>
    /**
     * Choose, which MataKuliah to update.
     */
    where: MataKuliahWhereUniqueInput
  }

  /**
   * MataKuliah updateMany
   */
  export type MataKuliahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MataKuliahs.
     */
    data: XOR<MataKuliahUpdateManyMutationInput, MataKuliahUncheckedUpdateManyInput>
    /**
     * Filter which MataKuliahs to update
     */
    where?: MataKuliahWhereInput
    /**
     * Limit how many MataKuliahs to update.
     */
    limit?: number
  }

  /**
   * MataKuliah upsert
   */
  export type MataKuliahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
    /**
     * The filter to search for the MataKuliah to update in case it exists.
     */
    where: MataKuliahWhereUniqueInput
    /**
     * In case the MataKuliah found by the `where` argument doesn't exist, create a new MataKuliah with this data.
     */
    create: XOR<MataKuliahCreateInput, MataKuliahUncheckedCreateInput>
    /**
     * In case the MataKuliah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MataKuliahUpdateInput, MataKuliahUncheckedUpdateInput>
  }

  /**
   * MataKuliah delete
   */
  export type MataKuliahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
    /**
     * Filter which MataKuliah to delete.
     */
    where: MataKuliahWhereUniqueInput
  }

  /**
   * MataKuliah deleteMany
   */
  export type MataKuliahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MataKuliahs to delete
     */
    where?: MataKuliahWhereInput
    /**
     * Limit how many MataKuliahs to delete.
     */
    limit?: number
  }

  /**
   * MataKuliah.kegiatan
   */
  export type MataKuliah$kegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    where?: KegiatanWhereInput
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    cursor?: KegiatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * MataKuliah.ProgramStudi
   */
  export type MataKuliah$ProgramStudiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    where?: ProgramStudiWhereInput
  }

  /**
   * MataKuliah without action
   */
  export type MataKuliahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
  }


  /**
   * Model Lampiran
   */

  export type AggregateLampiran = {
    _count: LampiranCountAggregateOutputType | null
    _min: LampiranMinAggregateOutputType | null
    _max: LampiranMaxAggregateOutputType | null
  }

  export type LampiranMinAggregateOutputType = {
    id: string | null
    kegiatanId: string | null
    namaFile: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LampiranMaxAggregateOutputType = {
    id: string | null
    kegiatanId: string | null
    namaFile: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LampiranCountAggregateOutputType = {
    id: number
    kegiatanId: number
    namaFile: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LampiranMinAggregateInputType = {
    id?: true
    kegiatanId?: true
    namaFile?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LampiranMaxAggregateInputType = {
    id?: true
    kegiatanId?: true
    namaFile?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LampiranCountAggregateInputType = {
    id?: true
    kegiatanId?: true
    namaFile?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LampiranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lampiran to aggregate.
     */
    where?: LampiranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lampirans to fetch.
     */
    orderBy?: LampiranOrderByWithRelationInput | LampiranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LampiranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lampirans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lampirans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lampirans
    **/
    _count?: true | LampiranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LampiranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LampiranMaxAggregateInputType
  }

  export type GetLampiranAggregateType<T extends LampiranAggregateArgs> = {
        [P in keyof T & keyof AggregateLampiran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLampiran[P]>
      : GetScalarType<T[P], AggregateLampiran[P]>
  }




  export type LampiranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LampiranWhereInput
    orderBy?: LampiranOrderByWithAggregationInput | LampiranOrderByWithAggregationInput[]
    by: LampiranScalarFieldEnum[] | LampiranScalarFieldEnum
    having?: LampiranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LampiranCountAggregateInputType | true
    _min?: LampiranMinAggregateInputType
    _max?: LampiranMaxAggregateInputType
  }

  export type LampiranGroupByOutputType = {
    id: string
    kegiatanId: string
    namaFile: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: LampiranCountAggregateOutputType | null
    _min: LampiranMinAggregateOutputType | null
    _max: LampiranMaxAggregateOutputType | null
  }

  type GetLampiranGroupByPayload<T extends LampiranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LampiranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LampiranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LampiranGroupByOutputType[P]>
            : GetScalarType<T[P], LampiranGroupByOutputType[P]>
        }
      >
    >


  export type LampiranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kegiatanId?: boolean
    namaFile?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kegiatan?: boolean | KegiatanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lampiran"]>



  export type LampiranSelectScalar = {
    id?: boolean
    kegiatanId?: boolean
    namaFile?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LampiranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kegiatanId" | "namaFile" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["lampiran"]>
  export type LampiranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | KegiatanDefaultArgs<ExtArgs>
  }

  export type $LampiranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lampiran"
    objects: {
      kegiatan: Prisma.$KegiatanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kegiatanId: string
      namaFile: string
      url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lampiran"]>
    composites: {}
  }

  type LampiranGetPayload<S extends boolean | null | undefined | LampiranDefaultArgs> = $Result.GetResult<Prisma.$LampiranPayload, S>

  type LampiranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LampiranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LampiranCountAggregateInputType | true
    }

  export interface LampiranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lampiran'], meta: { name: 'Lampiran' } }
    /**
     * Find zero or one Lampiran that matches the filter.
     * @param {LampiranFindUniqueArgs} args - Arguments to find a Lampiran
     * @example
     * // Get one Lampiran
     * const lampiran = await prisma.lampiran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LampiranFindUniqueArgs>(args: SelectSubset<T, LampiranFindUniqueArgs<ExtArgs>>): Prisma__LampiranClient<$Result.GetResult<Prisma.$LampiranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lampiran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LampiranFindUniqueOrThrowArgs} args - Arguments to find a Lampiran
     * @example
     * // Get one Lampiran
     * const lampiran = await prisma.lampiran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LampiranFindUniqueOrThrowArgs>(args: SelectSubset<T, LampiranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LampiranClient<$Result.GetResult<Prisma.$LampiranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lampiran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampiranFindFirstArgs} args - Arguments to find a Lampiran
     * @example
     * // Get one Lampiran
     * const lampiran = await prisma.lampiran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LampiranFindFirstArgs>(args?: SelectSubset<T, LampiranFindFirstArgs<ExtArgs>>): Prisma__LampiranClient<$Result.GetResult<Prisma.$LampiranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lampiran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampiranFindFirstOrThrowArgs} args - Arguments to find a Lampiran
     * @example
     * // Get one Lampiran
     * const lampiran = await prisma.lampiran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LampiranFindFirstOrThrowArgs>(args?: SelectSubset<T, LampiranFindFirstOrThrowArgs<ExtArgs>>): Prisma__LampiranClient<$Result.GetResult<Prisma.$LampiranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lampirans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampiranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lampirans
     * const lampirans = await prisma.lampiran.findMany()
     * 
     * // Get first 10 Lampirans
     * const lampirans = await prisma.lampiran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lampiranWithIdOnly = await prisma.lampiran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LampiranFindManyArgs>(args?: SelectSubset<T, LampiranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LampiranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lampiran.
     * @param {LampiranCreateArgs} args - Arguments to create a Lampiran.
     * @example
     * // Create one Lampiran
     * const Lampiran = await prisma.lampiran.create({
     *   data: {
     *     // ... data to create a Lampiran
     *   }
     * })
     * 
     */
    create<T extends LampiranCreateArgs>(args: SelectSubset<T, LampiranCreateArgs<ExtArgs>>): Prisma__LampiranClient<$Result.GetResult<Prisma.$LampiranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lampirans.
     * @param {LampiranCreateManyArgs} args - Arguments to create many Lampirans.
     * @example
     * // Create many Lampirans
     * const lampiran = await prisma.lampiran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LampiranCreateManyArgs>(args?: SelectSubset<T, LampiranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lampiran.
     * @param {LampiranDeleteArgs} args - Arguments to delete one Lampiran.
     * @example
     * // Delete one Lampiran
     * const Lampiran = await prisma.lampiran.delete({
     *   where: {
     *     // ... filter to delete one Lampiran
     *   }
     * })
     * 
     */
    delete<T extends LampiranDeleteArgs>(args: SelectSubset<T, LampiranDeleteArgs<ExtArgs>>): Prisma__LampiranClient<$Result.GetResult<Prisma.$LampiranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lampiran.
     * @param {LampiranUpdateArgs} args - Arguments to update one Lampiran.
     * @example
     * // Update one Lampiran
     * const lampiran = await prisma.lampiran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LampiranUpdateArgs>(args: SelectSubset<T, LampiranUpdateArgs<ExtArgs>>): Prisma__LampiranClient<$Result.GetResult<Prisma.$LampiranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lampirans.
     * @param {LampiranDeleteManyArgs} args - Arguments to filter Lampirans to delete.
     * @example
     * // Delete a few Lampirans
     * const { count } = await prisma.lampiran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LampiranDeleteManyArgs>(args?: SelectSubset<T, LampiranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lampirans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampiranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lampirans
     * const lampiran = await prisma.lampiran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LampiranUpdateManyArgs>(args: SelectSubset<T, LampiranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lampiran.
     * @param {LampiranUpsertArgs} args - Arguments to update or create a Lampiran.
     * @example
     * // Update or create a Lampiran
     * const lampiran = await prisma.lampiran.upsert({
     *   create: {
     *     // ... data to create a Lampiran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lampiran we want to update
     *   }
     * })
     */
    upsert<T extends LampiranUpsertArgs>(args: SelectSubset<T, LampiranUpsertArgs<ExtArgs>>): Prisma__LampiranClient<$Result.GetResult<Prisma.$LampiranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lampirans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampiranCountArgs} args - Arguments to filter Lampirans to count.
     * @example
     * // Count the number of Lampirans
     * const count = await prisma.lampiran.count({
     *   where: {
     *     // ... the filter for the Lampirans we want to count
     *   }
     * })
    **/
    count<T extends LampiranCountArgs>(
      args?: Subset<T, LampiranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LampiranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lampiran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampiranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LampiranAggregateArgs>(args: Subset<T, LampiranAggregateArgs>): Prisma.PrismaPromise<GetLampiranAggregateType<T>>

    /**
     * Group by Lampiran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampiranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LampiranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LampiranGroupByArgs['orderBy'] }
        : { orderBy?: LampiranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LampiranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLampiranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lampiran model
   */
  readonly fields: LampiranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lampiran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LampiranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kegiatan<T extends KegiatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KegiatanDefaultArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lampiran model
   */
  interface LampiranFieldRefs {
    readonly id: FieldRef<"Lampiran", 'String'>
    readonly kegiatanId: FieldRef<"Lampiran", 'String'>
    readonly namaFile: FieldRef<"Lampiran", 'String'>
    readonly url: FieldRef<"Lampiran", 'String'>
    readonly createdAt: FieldRef<"Lampiran", 'DateTime'>
    readonly updatedAt: FieldRef<"Lampiran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lampiran findUnique
   */
  export type LampiranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
    /**
     * Filter, which Lampiran to fetch.
     */
    where: LampiranWhereUniqueInput
  }

  /**
   * Lampiran findUniqueOrThrow
   */
  export type LampiranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
    /**
     * Filter, which Lampiran to fetch.
     */
    where: LampiranWhereUniqueInput
  }

  /**
   * Lampiran findFirst
   */
  export type LampiranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
    /**
     * Filter, which Lampiran to fetch.
     */
    where?: LampiranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lampirans to fetch.
     */
    orderBy?: LampiranOrderByWithRelationInput | LampiranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lampirans.
     */
    cursor?: LampiranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lampirans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lampirans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lampirans.
     */
    distinct?: LampiranScalarFieldEnum | LampiranScalarFieldEnum[]
  }

  /**
   * Lampiran findFirstOrThrow
   */
  export type LampiranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
    /**
     * Filter, which Lampiran to fetch.
     */
    where?: LampiranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lampirans to fetch.
     */
    orderBy?: LampiranOrderByWithRelationInput | LampiranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lampirans.
     */
    cursor?: LampiranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lampirans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lampirans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lampirans.
     */
    distinct?: LampiranScalarFieldEnum | LampiranScalarFieldEnum[]
  }

  /**
   * Lampiran findMany
   */
  export type LampiranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
    /**
     * Filter, which Lampirans to fetch.
     */
    where?: LampiranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lampirans to fetch.
     */
    orderBy?: LampiranOrderByWithRelationInput | LampiranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lampirans.
     */
    cursor?: LampiranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lampirans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lampirans.
     */
    skip?: number
    distinct?: LampiranScalarFieldEnum | LampiranScalarFieldEnum[]
  }

  /**
   * Lampiran create
   */
  export type LampiranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
    /**
     * The data needed to create a Lampiran.
     */
    data: XOR<LampiranCreateInput, LampiranUncheckedCreateInput>
  }

  /**
   * Lampiran createMany
   */
  export type LampiranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lampirans.
     */
    data: LampiranCreateManyInput | LampiranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lampiran update
   */
  export type LampiranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
    /**
     * The data needed to update a Lampiran.
     */
    data: XOR<LampiranUpdateInput, LampiranUncheckedUpdateInput>
    /**
     * Choose, which Lampiran to update.
     */
    where: LampiranWhereUniqueInput
  }

  /**
   * Lampiran updateMany
   */
  export type LampiranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lampirans.
     */
    data: XOR<LampiranUpdateManyMutationInput, LampiranUncheckedUpdateManyInput>
    /**
     * Filter which Lampirans to update
     */
    where?: LampiranWhereInput
    /**
     * Limit how many Lampirans to update.
     */
    limit?: number
  }

  /**
   * Lampiran upsert
   */
  export type LampiranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
    /**
     * The filter to search for the Lampiran to update in case it exists.
     */
    where: LampiranWhereUniqueInput
    /**
     * In case the Lampiran found by the `where` argument doesn't exist, create a new Lampiran with this data.
     */
    create: XOR<LampiranCreateInput, LampiranUncheckedCreateInput>
    /**
     * In case the Lampiran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LampiranUpdateInput, LampiranUncheckedUpdateInput>
  }

  /**
   * Lampiran delete
   */
  export type LampiranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
    /**
     * Filter which Lampiran to delete.
     */
    where: LampiranWhereUniqueInput
  }

  /**
   * Lampiran deleteMany
   */
  export type LampiranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lampirans to delete
     */
    where?: LampiranWhereInput
    /**
     * Limit how many Lampirans to delete.
     */
    limit?: number
  }

  /**
   * Lampiran without action
   */
  export type LampiranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lampiran
     */
    select?: LampiranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lampiran
     */
    omit?: LampiranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampiranInclude<ExtArgs> | null
  }


  /**
   * Model PermohonanBimbingan
   */

  export type AggregatePermohonanBimbingan = {
    _count: PermohonanBimbinganCountAggregateOutputType | null
    _min: PermohonanBimbinganMinAggregateOutputType | null
    _max: PermohonanBimbinganMaxAggregateOutputType | null
  }

  export type PermohonanBimbinganMinAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    dosenId: string | null
    status: string | null
    pesan: string | null
    alasanDitolak: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermohonanBimbinganMaxAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    dosenId: string | null
    status: string | null
    pesan: string | null
    alasanDitolak: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermohonanBimbinganCountAggregateOutputType = {
    id: number
    mahasiswaId: number
    dosenId: number
    status: number
    pesan: number
    alasanDitolak: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermohonanBimbinganMinAggregateInputType = {
    id?: true
    mahasiswaId?: true
    dosenId?: true
    status?: true
    pesan?: true
    alasanDitolak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermohonanBimbinganMaxAggregateInputType = {
    id?: true
    mahasiswaId?: true
    dosenId?: true
    status?: true
    pesan?: true
    alasanDitolak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermohonanBimbinganCountAggregateInputType = {
    id?: true
    mahasiswaId?: true
    dosenId?: true
    status?: true
    pesan?: true
    alasanDitolak?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermohonanBimbinganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermohonanBimbingan to aggregate.
     */
    where?: PermohonanBimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermohonanBimbingans to fetch.
     */
    orderBy?: PermohonanBimbinganOrderByWithRelationInput | PermohonanBimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermohonanBimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermohonanBimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermohonanBimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermohonanBimbingans
    **/
    _count?: true | PermohonanBimbinganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermohonanBimbinganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermohonanBimbinganMaxAggregateInputType
  }

  export type GetPermohonanBimbinganAggregateType<T extends PermohonanBimbinganAggregateArgs> = {
        [P in keyof T & keyof AggregatePermohonanBimbingan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermohonanBimbingan[P]>
      : GetScalarType<T[P], AggregatePermohonanBimbingan[P]>
  }




  export type PermohonanBimbinganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermohonanBimbinganWhereInput
    orderBy?: PermohonanBimbinganOrderByWithAggregationInput | PermohonanBimbinganOrderByWithAggregationInput[]
    by: PermohonanBimbinganScalarFieldEnum[] | PermohonanBimbinganScalarFieldEnum
    having?: PermohonanBimbinganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermohonanBimbinganCountAggregateInputType | true
    _min?: PermohonanBimbinganMinAggregateInputType
    _max?: PermohonanBimbinganMaxAggregateInputType
  }

  export type PermohonanBimbinganGroupByOutputType = {
    id: string
    mahasiswaId: string
    dosenId: string
    status: string
    pesan: string | null
    alasanDitolak: string | null
    createdAt: Date
    updatedAt: Date
    _count: PermohonanBimbinganCountAggregateOutputType | null
    _min: PermohonanBimbinganMinAggregateOutputType | null
    _max: PermohonanBimbinganMaxAggregateOutputType | null
  }

  type GetPermohonanBimbinganGroupByPayload<T extends PermohonanBimbinganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermohonanBimbinganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermohonanBimbinganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermohonanBimbinganGroupByOutputType[P]>
            : GetScalarType<T[P], PermohonanBimbinganGroupByOutputType[P]>
        }
      >
    >


  export type PermohonanBimbinganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswaId?: boolean
    dosenId?: boolean
    status?: boolean
    pesan?: boolean
    alasanDitolak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | DosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permohonanBimbingan"]>



  export type PermohonanBimbinganSelectScalar = {
    id?: boolean
    mahasiswaId?: boolean
    dosenId?: boolean
    status?: boolean
    pesan?: boolean
    alasanDitolak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermohonanBimbinganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mahasiswaId" | "dosenId" | "status" | "pesan" | "alasanDitolak" | "createdAt" | "updatedAt", ExtArgs["result"]["permohonanBimbingan"]>
  export type PermohonanBimbinganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | DosenDefaultArgs<ExtArgs>
  }

  export type $PermohonanBimbinganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermohonanBimbingan"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
      dosen: Prisma.$DosenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mahasiswaId: string
      dosenId: string
      status: string
      pesan: string | null
      alasanDitolak: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permohonanBimbingan"]>
    composites: {}
  }

  type PermohonanBimbinganGetPayload<S extends boolean | null | undefined | PermohonanBimbinganDefaultArgs> = $Result.GetResult<Prisma.$PermohonanBimbinganPayload, S>

  type PermohonanBimbinganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermohonanBimbinganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermohonanBimbinganCountAggregateInputType | true
    }

  export interface PermohonanBimbinganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermohonanBimbingan'], meta: { name: 'PermohonanBimbingan' } }
    /**
     * Find zero or one PermohonanBimbingan that matches the filter.
     * @param {PermohonanBimbinganFindUniqueArgs} args - Arguments to find a PermohonanBimbingan
     * @example
     * // Get one PermohonanBimbingan
     * const permohonanBimbingan = await prisma.permohonanBimbingan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermohonanBimbinganFindUniqueArgs>(args: SelectSubset<T, PermohonanBimbinganFindUniqueArgs<ExtArgs>>): Prisma__PermohonanBimbinganClient<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PermohonanBimbingan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermohonanBimbinganFindUniqueOrThrowArgs} args - Arguments to find a PermohonanBimbingan
     * @example
     * // Get one PermohonanBimbingan
     * const permohonanBimbingan = await prisma.permohonanBimbingan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermohonanBimbinganFindUniqueOrThrowArgs>(args: SelectSubset<T, PermohonanBimbinganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermohonanBimbinganClient<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PermohonanBimbingan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermohonanBimbinganFindFirstArgs} args - Arguments to find a PermohonanBimbingan
     * @example
     * // Get one PermohonanBimbingan
     * const permohonanBimbingan = await prisma.permohonanBimbingan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermohonanBimbinganFindFirstArgs>(args?: SelectSubset<T, PermohonanBimbinganFindFirstArgs<ExtArgs>>): Prisma__PermohonanBimbinganClient<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PermohonanBimbingan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermohonanBimbinganFindFirstOrThrowArgs} args - Arguments to find a PermohonanBimbingan
     * @example
     * // Get one PermohonanBimbingan
     * const permohonanBimbingan = await prisma.permohonanBimbingan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermohonanBimbinganFindFirstOrThrowArgs>(args?: SelectSubset<T, PermohonanBimbinganFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermohonanBimbinganClient<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PermohonanBimbingans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermohonanBimbinganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermohonanBimbingans
     * const permohonanBimbingans = await prisma.permohonanBimbingan.findMany()
     * 
     * // Get first 10 PermohonanBimbingans
     * const permohonanBimbingans = await prisma.permohonanBimbingan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permohonanBimbinganWithIdOnly = await prisma.permohonanBimbingan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermohonanBimbinganFindManyArgs>(args?: SelectSubset<T, PermohonanBimbinganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PermohonanBimbingan.
     * @param {PermohonanBimbinganCreateArgs} args - Arguments to create a PermohonanBimbingan.
     * @example
     * // Create one PermohonanBimbingan
     * const PermohonanBimbingan = await prisma.permohonanBimbingan.create({
     *   data: {
     *     // ... data to create a PermohonanBimbingan
     *   }
     * })
     * 
     */
    create<T extends PermohonanBimbinganCreateArgs>(args: SelectSubset<T, PermohonanBimbinganCreateArgs<ExtArgs>>): Prisma__PermohonanBimbinganClient<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PermohonanBimbingans.
     * @param {PermohonanBimbinganCreateManyArgs} args - Arguments to create many PermohonanBimbingans.
     * @example
     * // Create many PermohonanBimbingans
     * const permohonanBimbingan = await prisma.permohonanBimbingan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermohonanBimbinganCreateManyArgs>(args?: SelectSubset<T, PermohonanBimbinganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PermohonanBimbingan.
     * @param {PermohonanBimbinganDeleteArgs} args - Arguments to delete one PermohonanBimbingan.
     * @example
     * // Delete one PermohonanBimbingan
     * const PermohonanBimbingan = await prisma.permohonanBimbingan.delete({
     *   where: {
     *     // ... filter to delete one PermohonanBimbingan
     *   }
     * })
     * 
     */
    delete<T extends PermohonanBimbinganDeleteArgs>(args: SelectSubset<T, PermohonanBimbinganDeleteArgs<ExtArgs>>): Prisma__PermohonanBimbinganClient<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PermohonanBimbingan.
     * @param {PermohonanBimbinganUpdateArgs} args - Arguments to update one PermohonanBimbingan.
     * @example
     * // Update one PermohonanBimbingan
     * const permohonanBimbingan = await prisma.permohonanBimbingan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermohonanBimbinganUpdateArgs>(args: SelectSubset<T, PermohonanBimbinganUpdateArgs<ExtArgs>>): Prisma__PermohonanBimbinganClient<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PermohonanBimbingans.
     * @param {PermohonanBimbinganDeleteManyArgs} args - Arguments to filter PermohonanBimbingans to delete.
     * @example
     * // Delete a few PermohonanBimbingans
     * const { count } = await prisma.permohonanBimbingan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermohonanBimbinganDeleteManyArgs>(args?: SelectSubset<T, PermohonanBimbinganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermohonanBimbingans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermohonanBimbinganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermohonanBimbingans
     * const permohonanBimbingan = await prisma.permohonanBimbingan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermohonanBimbinganUpdateManyArgs>(args: SelectSubset<T, PermohonanBimbinganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PermohonanBimbingan.
     * @param {PermohonanBimbinganUpsertArgs} args - Arguments to update or create a PermohonanBimbingan.
     * @example
     * // Update or create a PermohonanBimbingan
     * const permohonanBimbingan = await prisma.permohonanBimbingan.upsert({
     *   create: {
     *     // ... data to create a PermohonanBimbingan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermohonanBimbingan we want to update
     *   }
     * })
     */
    upsert<T extends PermohonanBimbinganUpsertArgs>(args: SelectSubset<T, PermohonanBimbinganUpsertArgs<ExtArgs>>): Prisma__PermohonanBimbinganClient<$Result.GetResult<Prisma.$PermohonanBimbinganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PermohonanBimbingans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermohonanBimbinganCountArgs} args - Arguments to filter PermohonanBimbingans to count.
     * @example
     * // Count the number of PermohonanBimbingans
     * const count = await prisma.permohonanBimbingan.count({
     *   where: {
     *     // ... the filter for the PermohonanBimbingans we want to count
     *   }
     * })
    **/
    count<T extends PermohonanBimbinganCountArgs>(
      args?: Subset<T, PermohonanBimbinganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermohonanBimbinganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermohonanBimbingan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermohonanBimbinganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermohonanBimbinganAggregateArgs>(args: Subset<T, PermohonanBimbinganAggregateArgs>): Prisma.PrismaPromise<GetPermohonanBimbinganAggregateType<T>>

    /**
     * Group by PermohonanBimbingan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermohonanBimbinganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermohonanBimbinganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermohonanBimbinganGroupByArgs['orderBy'] }
        : { orderBy?: PermohonanBimbinganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermohonanBimbinganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermohonanBimbinganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermohonanBimbingan model
   */
  readonly fields: PermohonanBimbinganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermohonanBimbingan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermohonanBimbinganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosen<T extends DosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DosenDefaultArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PermohonanBimbingan model
   */
  interface PermohonanBimbinganFieldRefs {
    readonly id: FieldRef<"PermohonanBimbingan", 'String'>
    readonly mahasiswaId: FieldRef<"PermohonanBimbingan", 'String'>
    readonly dosenId: FieldRef<"PermohonanBimbingan", 'String'>
    readonly status: FieldRef<"PermohonanBimbingan", 'String'>
    readonly pesan: FieldRef<"PermohonanBimbingan", 'String'>
    readonly alasanDitolak: FieldRef<"PermohonanBimbingan", 'String'>
    readonly createdAt: FieldRef<"PermohonanBimbingan", 'DateTime'>
    readonly updatedAt: FieldRef<"PermohonanBimbingan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PermohonanBimbingan findUnique
   */
  export type PermohonanBimbinganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    /**
     * Filter, which PermohonanBimbingan to fetch.
     */
    where: PermohonanBimbinganWhereUniqueInput
  }

  /**
   * PermohonanBimbingan findUniqueOrThrow
   */
  export type PermohonanBimbinganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    /**
     * Filter, which PermohonanBimbingan to fetch.
     */
    where: PermohonanBimbinganWhereUniqueInput
  }

  /**
   * PermohonanBimbingan findFirst
   */
  export type PermohonanBimbinganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    /**
     * Filter, which PermohonanBimbingan to fetch.
     */
    where?: PermohonanBimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermohonanBimbingans to fetch.
     */
    orderBy?: PermohonanBimbinganOrderByWithRelationInput | PermohonanBimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermohonanBimbingans.
     */
    cursor?: PermohonanBimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermohonanBimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermohonanBimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermohonanBimbingans.
     */
    distinct?: PermohonanBimbinganScalarFieldEnum | PermohonanBimbinganScalarFieldEnum[]
  }

  /**
   * PermohonanBimbingan findFirstOrThrow
   */
  export type PermohonanBimbinganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    /**
     * Filter, which PermohonanBimbingan to fetch.
     */
    where?: PermohonanBimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermohonanBimbingans to fetch.
     */
    orderBy?: PermohonanBimbinganOrderByWithRelationInput | PermohonanBimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermohonanBimbingans.
     */
    cursor?: PermohonanBimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermohonanBimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermohonanBimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermohonanBimbingans.
     */
    distinct?: PermohonanBimbinganScalarFieldEnum | PermohonanBimbinganScalarFieldEnum[]
  }

  /**
   * PermohonanBimbingan findMany
   */
  export type PermohonanBimbinganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    /**
     * Filter, which PermohonanBimbingans to fetch.
     */
    where?: PermohonanBimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermohonanBimbingans to fetch.
     */
    orderBy?: PermohonanBimbinganOrderByWithRelationInput | PermohonanBimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermohonanBimbingans.
     */
    cursor?: PermohonanBimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermohonanBimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermohonanBimbingans.
     */
    skip?: number
    distinct?: PermohonanBimbinganScalarFieldEnum | PermohonanBimbinganScalarFieldEnum[]
  }

  /**
   * PermohonanBimbingan create
   */
  export type PermohonanBimbinganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    /**
     * The data needed to create a PermohonanBimbingan.
     */
    data: XOR<PermohonanBimbinganCreateInput, PermohonanBimbinganUncheckedCreateInput>
  }

  /**
   * PermohonanBimbingan createMany
   */
  export type PermohonanBimbinganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermohonanBimbingans.
     */
    data: PermohonanBimbinganCreateManyInput | PermohonanBimbinganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermohonanBimbingan update
   */
  export type PermohonanBimbinganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    /**
     * The data needed to update a PermohonanBimbingan.
     */
    data: XOR<PermohonanBimbinganUpdateInput, PermohonanBimbinganUncheckedUpdateInput>
    /**
     * Choose, which PermohonanBimbingan to update.
     */
    where: PermohonanBimbinganWhereUniqueInput
  }

  /**
   * PermohonanBimbingan updateMany
   */
  export type PermohonanBimbinganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermohonanBimbingans.
     */
    data: XOR<PermohonanBimbinganUpdateManyMutationInput, PermohonanBimbinganUncheckedUpdateManyInput>
    /**
     * Filter which PermohonanBimbingans to update
     */
    where?: PermohonanBimbinganWhereInput
    /**
     * Limit how many PermohonanBimbingans to update.
     */
    limit?: number
  }

  /**
   * PermohonanBimbingan upsert
   */
  export type PermohonanBimbinganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    /**
     * The filter to search for the PermohonanBimbingan to update in case it exists.
     */
    where: PermohonanBimbinganWhereUniqueInput
    /**
     * In case the PermohonanBimbingan found by the `where` argument doesn't exist, create a new PermohonanBimbingan with this data.
     */
    create: XOR<PermohonanBimbinganCreateInput, PermohonanBimbinganUncheckedCreateInput>
    /**
     * In case the PermohonanBimbingan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermohonanBimbinganUpdateInput, PermohonanBimbinganUncheckedUpdateInput>
  }

  /**
   * PermohonanBimbingan delete
   */
  export type PermohonanBimbinganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
    /**
     * Filter which PermohonanBimbingan to delete.
     */
    where: PermohonanBimbinganWhereUniqueInput
  }

  /**
   * PermohonanBimbingan deleteMany
   */
  export type PermohonanBimbinganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermohonanBimbingans to delete
     */
    where?: PermohonanBimbinganWhereInput
    /**
     * Limit how many PermohonanBimbingans to delete.
     */
    limit?: number
  }

  /**
   * PermohonanBimbingan without action
   */
  export type PermohonanBimbinganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermohonanBimbingan
     */
    select?: PermohonanBimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermohonanBimbingan
     */
    omit?: PermohonanBimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermohonanBimbinganInclude<ExtArgs> | null
  }


  /**
   * Model Notifikasi
   */

  export type AggregateNotifikasi = {
    _count: NotifikasiCountAggregateOutputType | null
    _min: NotifikasiMinAggregateOutputType | null
    _max: NotifikasiMaxAggregateOutputType | null
  }

  export type NotifikasiMinAggregateOutputType = {
    id: string | null
    penggunaId: string | null
    judul: string | null
    pesan: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotifikasiMaxAggregateOutputType = {
    id: string | null
    penggunaId: string | null
    judul: string | null
    pesan: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotifikasiCountAggregateOutputType = {
    id: number
    penggunaId: number
    judul: number
    pesan: number
    isRead: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotifikasiMinAggregateInputType = {
    id?: true
    penggunaId?: true
    judul?: true
    pesan?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotifikasiMaxAggregateInputType = {
    id?: true
    penggunaId?: true
    judul?: true
    pesan?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotifikasiCountAggregateInputType = {
    id?: true
    penggunaId?: true
    judul?: true
    pesan?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotifikasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifikasi to aggregate.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifikasis
    **/
    _count?: true | NotifikasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotifikasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotifikasiMaxAggregateInputType
  }

  export type GetNotifikasiAggregateType<T extends NotifikasiAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifikasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifikasi[P]>
      : GetScalarType<T[P], AggregateNotifikasi[P]>
  }




  export type NotifikasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotifikasiWhereInput
    orderBy?: NotifikasiOrderByWithAggregationInput | NotifikasiOrderByWithAggregationInput[]
    by: NotifikasiScalarFieldEnum[] | NotifikasiScalarFieldEnum
    having?: NotifikasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotifikasiCountAggregateInputType | true
    _min?: NotifikasiMinAggregateInputType
    _max?: NotifikasiMaxAggregateInputType
  }

  export type NotifikasiGroupByOutputType = {
    id: string
    penggunaId: string
    judul: string
    pesan: string
    isRead: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotifikasiCountAggregateOutputType | null
    _min: NotifikasiMinAggregateOutputType | null
    _max: NotifikasiMaxAggregateOutputType | null
  }

  type GetNotifikasiGroupByPayload<T extends NotifikasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotifikasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotifikasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotifikasiGroupByOutputType[P]>
            : GetScalarType<T[P], NotifikasiGroupByOutputType[P]>
        }
      >
    >


  export type NotifikasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penggunaId?: boolean
    judul?: boolean
    pesan?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifikasi"]>



  export type NotifikasiSelectScalar = {
    id?: boolean
    penggunaId?: boolean
    judul?: boolean
    pesan?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotifikasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "penggunaId" | "judul" | "pesan" | "isRead" | "createdAt" | "updatedAt", ExtArgs["result"]["notifikasi"]>
  export type NotifikasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
  }

  export type $NotifikasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifikasi"
    objects: {
      pengguna: Prisma.$PenggunaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      penggunaId: string
      judul: string
      pesan: string
      isRead: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notifikasi"]>
    composites: {}
  }

  type NotifikasiGetPayload<S extends boolean | null | undefined | NotifikasiDefaultArgs> = $Result.GetResult<Prisma.$NotifikasiPayload, S>

  type NotifikasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotifikasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotifikasiCountAggregateInputType | true
    }

  export interface NotifikasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifikasi'], meta: { name: 'Notifikasi' } }
    /**
     * Find zero or one Notifikasi that matches the filter.
     * @param {NotifikasiFindUniqueArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotifikasiFindUniqueArgs>(args: SelectSubset<T, NotifikasiFindUniqueArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifikasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotifikasiFindUniqueOrThrowArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotifikasiFindUniqueOrThrowArgs>(args: SelectSubset<T, NotifikasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifikasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiFindFirstArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotifikasiFindFirstArgs>(args?: SelectSubset<T, NotifikasiFindFirstArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifikasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiFindFirstOrThrowArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotifikasiFindFirstOrThrowArgs>(args?: SelectSubset<T, NotifikasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifikasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifikasis
     * const notifikasis = await prisma.notifikasi.findMany()
     * 
     * // Get first 10 Notifikasis
     * const notifikasis = await prisma.notifikasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notifikasiWithIdOnly = await prisma.notifikasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotifikasiFindManyArgs>(args?: SelectSubset<T, NotifikasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifikasi.
     * @param {NotifikasiCreateArgs} args - Arguments to create a Notifikasi.
     * @example
     * // Create one Notifikasi
     * const Notifikasi = await prisma.notifikasi.create({
     *   data: {
     *     // ... data to create a Notifikasi
     *   }
     * })
     * 
     */
    create<T extends NotifikasiCreateArgs>(args: SelectSubset<T, NotifikasiCreateArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifikasis.
     * @param {NotifikasiCreateManyArgs} args - Arguments to create many Notifikasis.
     * @example
     * // Create many Notifikasis
     * const notifikasi = await prisma.notifikasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotifikasiCreateManyArgs>(args?: SelectSubset<T, NotifikasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifikasi.
     * @param {NotifikasiDeleteArgs} args - Arguments to delete one Notifikasi.
     * @example
     * // Delete one Notifikasi
     * const Notifikasi = await prisma.notifikasi.delete({
     *   where: {
     *     // ... filter to delete one Notifikasi
     *   }
     * })
     * 
     */
    delete<T extends NotifikasiDeleteArgs>(args: SelectSubset<T, NotifikasiDeleteArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifikasi.
     * @param {NotifikasiUpdateArgs} args - Arguments to update one Notifikasi.
     * @example
     * // Update one Notifikasi
     * const notifikasi = await prisma.notifikasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotifikasiUpdateArgs>(args: SelectSubset<T, NotifikasiUpdateArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifikasis.
     * @param {NotifikasiDeleteManyArgs} args - Arguments to filter Notifikasis to delete.
     * @example
     * // Delete a few Notifikasis
     * const { count } = await prisma.notifikasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotifikasiDeleteManyArgs>(args?: SelectSubset<T, NotifikasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifikasis
     * const notifikasi = await prisma.notifikasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotifikasiUpdateManyArgs>(args: SelectSubset<T, NotifikasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifikasi.
     * @param {NotifikasiUpsertArgs} args - Arguments to update or create a Notifikasi.
     * @example
     * // Update or create a Notifikasi
     * const notifikasi = await prisma.notifikasi.upsert({
     *   create: {
     *     // ... data to create a Notifikasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifikasi we want to update
     *   }
     * })
     */
    upsert<T extends NotifikasiUpsertArgs>(args: SelectSubset<T, NotifikasiUpsertArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiCountArgs} args - Arguments to filter Notifikasis to count.
     * @example
     * // Count the number of Notifikasis
     * const count = await prisma.notifikasi.count({
     *   where: {
     *     // ... the filter for the Notifikasis we want to count
     *   }
     * })
    **/
    count<T extends NotifikasiCountArgs>(
      args?: Subset<T, NotifikasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotifikasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotifikasiAggregateArgs>(args: Subset<T, NotifikasiAggregateArgs>): Prisma.PrismaPromise<GetNotifikasiAggregateType<T>>

    /**
     * Group by Notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotifikasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotifikasiGroupByArgs['orderBy'] }
        : { orderBy?: NotifikasiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotifikasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotifikasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifikasi model
   */
  readonly fields: NotifikasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifikasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotifikasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends PenggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenggunaDefaultArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifikasi model
   */
  interface NotifikasiFieldRefs {
    readonly id: FieldRef<"Notifikasi", 'String'>
    readonly penggunaId: FieldRef<"Notifikasi", 'String'>
    readonly judul: FieldRef<"Notifikasi", 'String'>
    readonly pesan: FieldRef<"Notifikasi", 'String'>
    readonly isRead: FieldRef<"Notifikasi", 'Boolean'>
    readonly createdAt: FieldRef<"Notifikasi", 'DateTime'>
    readonly updatedAt: FieldRef<"Notifikasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notifikasi findUnique
   */
  export type NotifikasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi findUniqueOrThrow
   */
  export type NotifikasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi findFirst
   */
  export type NotifikasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifikasis.
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifikasis.
     */
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * Notifikasi findFirstOrThrow
   */
  export type NotifikasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifikasis.
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifikasis.
     */
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * Notifikasi findMany
   */
  export type NotifikasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Notifikasis to fetch.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifikasis.
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * Notifikasi create
   */
  export type NotifikasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifikasi.
     */
    data: XOR<NotifikasiCreateInput, NotifikasiUncheckedCreateInput>
  }

  /**
   * Notifikasi createMany
   */
  export type NotifikasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifikasis.
     */
    data: NotifikasiCreateManyInput | NotifikasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifikasi update
   */
  export type NotifikasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifikasi.
     */
    data: XOR<NotifikasiUpdateInput, NotifikasiUncheckedUpdateInput>
    /**
     * Choose, which Notifikasi to update.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi updateMany
   */
  export type NotifikasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifikasis.
     */
    data: XOR<NotifikasiUpdateManyMutationInput, NotifikasiUncheckedUpdateManyInput>
    /**
     * Filter which Notifikasis to update
     */
    where?: NotifikasiWhereInput
    /**
     * Limit how many Notifikasis to update.
     */
    limit?: number
  }

  /**
   * Notifikasi upsert
   */
  export type NotifikasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifikasi to update in case it exists.
     */
    where: NotifikasiWhereUniqueInput
    /**
     * In case the Notifikasi found by the `where` argument doesn't exist, create a new Notifikasi with this data.
     */
    create: XOR<NotifikasiCreateInput, NotifikasiUncheckedCreateInput>
    /**
     * In case the Notifikasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotifikasiUpdateInput, NotifikasiUncheckedUpdateInput>
  }

  /**
   * Notifikasi delete
   */
  export type NotifikasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter which Notifikasi to delete.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi deleteMany
   */
  export type NotifikasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifikasis to delete
     */
    where?: NotifikasiWhereInput
    /**
     * Limit how many Notifikasis to delete.
     */
    limit?: number
  }

  /**
   * Notifikasi without action
   */
  export type NotifikasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
  }


  /**
   * Model ProgramStudi
   */

  export type AggregateProgramStudi = {
    _count: ProgramStudiCountAggregateOutputType | null
    _min: ProgramStudiMinAggregateOutputType | null
    _max: ProgramStudiMaxAggregateOutputType | null
  }

  export type ProgramStudiMinAggregateOutputType = {
    id: string | null
    nama: string | null
    displayName: string | null
    templateSingleFieldForDate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramStudiMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    displayName: string | null
    templateSingleFieldForDate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramStudiCountAggregateOutputType = {
    id: number
    nama: number
    displayName: number
    templateSingleFieldForDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgramStudiMinAggregateInputType = {
    id?: true
    nama?: true
    displayName?: true
    templateSingleFieldForDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramStudiMaxAggregateInputType = {
    id?: true
    nama?: true
    displayName?: true
    templateSingleFieldForDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramStudiCountAggregateInputType = {
    id?: true
    nama?: true
    displayName?: true
    templateSingleFieldForDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgramStudiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramStudi to aggregate.
     */
    where?: ProgramStudiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudis to fetch.
     */
    orderBy?: ProgramStudiOrderByWithRelationInput | ProgramStudiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramStudiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramStudis
    **/
    _count?: true | ProgramStudiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramStudiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramStudiMaxAggregateInputType
  }

  export type GetProgramStudiAggregateType<T extends ProgramStudiAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramStudi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramStudi[P]>
      : GetScalarType<T[P], AggregateProgramStudi[P]>
  }




  export type ProgramStudiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramStudiWhereInput
    orderBy?: ProgramStudiOrderByWithAggregationInput | ProgramStudiOrderByWithAggregationInput[]
    by: ProgramStudiScalarFieldEnum[] | ProgramStudiScalarFieldEnum
    having?: ProgramStudiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramStudiCountAggregateInputType | true
    _min?: ProgramStudiMinAggregateInputType
    _max?: ProgramStudiMaxAggregateInputType
  }

  export type ProgramStudiGroupByOutputType = {
    id: string
    nama: string
    displayName: string
    templateSingleFieldForDate: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProgramStudiCountAggregateOutputType | null
    _min: ProgramStudiMinAggregateOutputType | null
    _max: ProgramStudiMaxAggregateOutputType | null
  }

  type GetProgramStudiGroupByPayload<T extends ProgramStudiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramStudiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramStudiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramStudiGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramStudiGroupByOutputType[P]>
        }
      >
    >


  export type ProgramStudiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    displayName?: boolean
    templateSingleFieldForDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pengguna?: boolean | ProgramStudi$penggunaArgs<ExtArgs>
    fields?: boolean | ProgramStudi$fieldsArgs<ExtArgs>
    mataKuliah?: boolean | ProgramStudi$mataKuliahArgs<ExtArgs>
    _count?: boolean | ProgramStudiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programStudi"]>



  export type ProgramStudiSelectScalar = {
    id?: boolean
    nama?: boolean
    displayName?: boolean
    templateSingleFieldForDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgramStudiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "displayName" | "templateSingleFieldForDate" | "createdAt" | "updatedAt", ExtArgs["result"]["programStudi"]>
  export type ProgramStudiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | ProgramStudi$penggunaArgs<ExtArgs>
    fields?: boolean | ProgramStudi$fieldsArgs<ExtArgs>
    mataKuliah?: boolean | ProgramStudi$mataKuliahArgs<ExtArgs>
    _count?: boolean | ProgramStudiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProgramStudiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramStudi"
    objects: {
      pengguna: Prisma.$PenggunaPayload<ExtArgs>[]
      fields: Prisma.$ProgramStudiFieldPayload<ExtArgs>[]
      mataKuliah: Prisma.$MataKuliahPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      displayName: string
      templateSingleFieldForDate: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["programStudi"]>
    composites: {}
  }

  type ProgramStudiGetPayload<S extends boolean | null | undefined | ProgramStudiDefaultArgs> = $Result.GetResult<Prisma.$ProgramStudiPayload, S>

  type ProgramStudiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramStudiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramStudiCountAggregateInputType | true
    }

  export interface ProgramStudiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramStudi'], meta: { name: 'ProgramStudi' } }
    /**
     * Find zero or one ProgramStudi that matches the filter.
     * @param {ProgramStudiFindUniqueArgs} args - Arguments to find a ProgramStudi
     * @example
     * // Get one ProgramStudi
     * const programStudi = await prisma.programStudi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramStudiFindUniqueArgs>(args: SelectSubset<T, ProgramStudiFindUniqueArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgramStudi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramStudiFindUniqueOrThrowArgs} args - Arguments to find a ProgramStudi
     * @example
     * // Get one ProgramStudi
     * const programStudi = await prisma.programStudi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramStudiFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramStudiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramStudi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFindFirstArgs} args - Arguments to find a ProgramStudi
     * @example
     * // Get one ProgramStudi
     * const programStudi = await prisma.programStudi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramStudiFindFirstArgs>(args?: SelectSubset<T, ProgramStudiFindFirstArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramStudi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFindFirstOrThrowArgs} args - Arguments to find a ProgramStudi
     * @example
     * // Get one ProgramStudi
     * const programStudi = await prisma.programStudi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramStudiFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramStudiFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgramStudis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramStudis
     * const programStudis = await prisma.programStudi.findMany()
     * 
     * // Get first 10 ProgramStudis
     * const programStudis = await prisma.programStudi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programStudiWithIdOnly = await prisma.programStudi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramStudiFindManyArgs>(args?: SelectSubset<T, ProgramStudiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgramStudi.
     * @param {ProgramStudiCreateArgs} args - Arguments to create a ProgramStudi.
     * @example
     * // Create one ProgramStudi
     * const ProgramStudi = await prisma.programStudi.create({
     *   data: {
     *     // ... data to create a ProgramStudi
     *   }
     * })
     * 
     */
    create<T extends ProgramStudiCreateArgs>(args: SelectSubset<T, ProgramStudiCreateArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgramStudis.
     * @param {ProgramStudiCreateManyArgs} args - Arguments to create many ProgramStudis.
     * @example
     * // Create many ProgramStudis
     * const programStudi = await prisma.programStudi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramStudiCreateManyArgs>(args?: SelectSubset<T, ProgramStudiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgramStudi.
     * @param {ProgramStudiDeleteArgs} args - Arguments to delete one ProgramStudi.
     * @example
     * // Delete one ProgramStudi
     * const ProgramStudi = await prisma.programStudi.delete({
     *   where: {
     *     // ... filter to delete one ProgramStudi
     *   }
     * })
     * 
     */
    delete<T extends ProgramStudiDeleteArgs>(args: SelectSubset<T, ProgramStudiDeleteArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgramStudi.
     * @param {ProgramStudiUpdateArgs} args - Arguments to update one ProgramStudi.
     * @example
     * // Update one ProgramStudi
     * const programStudi = await prisma.programStudi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramStudiUpdateArgs>(args: SelectSubset<T, ProgramStudiUpdateArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgramStudis.
     * @param {ProgramStudiDeleteManyArgs} args - Arguments to filter ProgramStudis to delete.
     * @example
     * // Delete a few ProgramStudis
     * const { count } = await prisma.programStudi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramStudiDeleteManyArgs>(args?: SelectSubset<T, ProgramStudiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramStudis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramStudis
     * const programStudi = await prisma.programStudi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramStudiUpdateManyArgs>(args: SelectSubset<T, ProgramStudiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgramStudi.
     * @param {ProgramStudiUpsertArgs} args - Arguments to update or create a ProgramStudi.
     * @example
     * // Update or create a ProgramStudi
     * const programStudi = await prisma.programStudi.upsert({
     *   create: {
     *     // ... data to create a ProgramStudi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramStudi we want to update
     *   }
     * })
     */
    upsert<T extends ProgramStudiUpsertArgs>(args: SelectSubset<T, ProgramStudiUpsertArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgramStudis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiCountArgs} args - Arguments to filter ProgramStudis to count.
     * @example
     * // Count the number of ProgramStudis
     * const count = await prisma.programStudi.count({
     *   where: {
     *     // ... the filter for the ProgramStudis we want to count
     *   }
     * })
    **/
    count<T extends ProgramStudiCountArgs>(
      args?: Subset<T, ProgramStudiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramStudiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramStudi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramStudiAggregateArgs>(args: Subset<T, ProgramStudiAggregateArgs>): Prisma.PrismaPromise<GetProgramStudiAggregateType<T>>

    /**
     * Group by ProgramStudi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgramStudiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramStudiGroupByArgs['orderBy'] }
        : { orderBy?: ProgramStudiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramStudiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramStudiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramStudi model
   */
  readonly fields: ProgramStudiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramStudi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramStudiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends ProgramStudi$penggunaArgs<ExtArgs> = {}>(args?: Subset<T, ProgramStudi$penggunaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fields<T extends ProgramStudi$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, ProgramStudi$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramStudiFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mataKuliah<T extends ProgramStudi$mataKuliahArgs<ExtArgs> = {}>(args?: Subset<T, ProgramStudi$mataKuliahArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MataKuliahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgramStudi model
   */
  interface ProgramStudiFieldRefs {
    readonly id: FieldRef<"ProgramStudi", 'String'>
    readonly nama: FieldRef<"ProgramStudi", 'String'>
    readonly displayName: FieldRef<"ProgramStudi", 'String'>
    readonly templateSingleFieldForDate: FieldRef<"ProgramStudi", 'Boolean'>
    readonly createdAt: FieldRef<"ProgramStudi", 'DateTime'>
    readonly updatedAt: FieldRef<"ProgramStudi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgramStudi findUnique
   */
  export type ProgramStudiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudi to fetch.
     */
    where: ProgramStudiWhereUniqueInput
  }

  /**
   * ProgramStudi findUniqueOrThrow
   */
  export type ProgramStudiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudi to fetch.
     */
    where: ProgramStudiWhereUniqueInput
  }

  /**
   * ProgramStudi findFirst
   */
  export type ProgramStudiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudi to fetch.
     */
    where?: ProgramStudiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudis to fetch.
     */
    orderBy?: ProgramStudiOrderByWithRelationInput | ProgramStudiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramStudis.
     */
    cursor?: ProgramStudiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramStudis.
     */
    distinct?: ProgramStudiScalarFieldEnum | ProgramStudiScalarFieldEnum[]
  }

  /**
   * ProgramStudi findFirstOrThrow
   */
  export type ProgramStudiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudi to fetch.
     */
    where?: ProgramStudiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudis to fetch.
     */
    orderBy?: ProgramStudiOrderByWithRelationInput | ProgramStudiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramStudis.
     */
    cursor?: ProgramStudiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramStudis.
     */
    distinct?: ProgramStudiScalarFieldEnum | ProgramStudiScalarFieldEnum[]
  }

  /**
   * ProgramStudi findMany
   */
  export type ProgramStudiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudis to fetch.
     */
    where?: ProgramStudiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudis to fetch.
     */
    orderBy?: ProgramStudiOrderByWithRelationInput | ProgramStudiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramStudis.
     */
    cursor?: ProgramStudiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudis.
     */
    skip?: number
    distinct?: ProgramStudiScalarFieldEnum | ProgramStudiScalarFieldEnum[]
  }

  /**
   * ProgramStudi create
   */
  export type ProgramStudiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramStudi.
     */
    data: XOR<ProgramStudiCreateInput, ProgramStudiUncheckedCreateInput>
  }

  /**
   * ProgramStudi createMany
   */
  export type ProgramStudiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramStudis.
     */
    data: ProgramStudiCreateManyInput | ProgramStudiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgramStudi update
   */
  export type ProgramStudiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramStudi.
     */
    data: XOR<ProgramStudiUpdateInput, ProgramStudiUncheckedUpdateInput>
    /**
     * Choose, which ProgramStudi to update.
     */
    where: ProgramStudiWhereUniqueInput
  }

  /**
   * ProgramStudi updateMany
   */
  export type ProgramStudiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramStudis.
     */
    data: XOR<ProgramStudiUpdateManyMutationInput, ProgramStudiUncheckedUpdateManyInput>
    /**
     * Filter which ProgramStudis to update
     */
    where?: ProgramStudiWhereInput
    /**
     * Limit how many ProgramStudis to update.
     */
    limit?: number
  }

  /**
   * ProgramStudi upsert
   */
  export type ProgramStudiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramStudi to update in case it exists.
     */
    where: ProgramStudiWhereUniqueInput
    /**
     * In case the ProgramStudi found by the `where` argument doesn't exist, create a new ProgramStudi with this data.
     */
    create: XOR<ProgramStudiCreateInput, ProgramStudiUncheckedCreateInput>
    /**
     * In case the ProgramStudi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramStudiUpdateInput, ProgramStudiUncheckedUpdateInput>
  }

  /**
   * ProgramStudi delete
   */
  export type ProgramStudiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter which ProgramStudi to delete.
     */
    where: ProgramStudiWhereUniqueInput
  }

  /**
   * ProgramStudi deleteMany
   */
  export type ProgramStudiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramStudis to delete
     */
    where?: ProgramStudiWhereInput
    /**
     * Limit how many ProgramStudis to delete.
     */
    limit?: number
  }

  /**
   * ProgramStudi.pengguna
   */
  export type ProgramStudi$penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    where?: PenggunaWhereInput
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    cursor?: PenggunaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * ProgramStudi.fields
   */
  export type ProgramStudi$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
    where?: ProgramStudiFieldWhereInput
    orderBy?: ProgramStudiFieldOrderByWithRelationInput | ProgramStudiFieldOrderByWithRelationInput[]
    cursor?: ProgramStudiFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramStudiFieldScalarFieldEnum | ProgramStudiFieldScalarFieldEnum[]
  }

  /**
   * ProgramStudi.mataKuliah
   */
  export type ProgramStudi$mataKuliahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataKuliah
     */
    select?: MataKuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataKuliah
     */
    omit?: MataKuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataKuliahInclude<ExtArgs> | null
    where?: MataKuliahWhereInput
    orderBy?: MataKuliahOrderByWithRelationInput | MataKuliahOrderByWithRelationInput[]
    cursor?: MataKuliahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MataKuliahScalarFieldEnum | MataKuliahScalarFieldEnum[]
  }

  /**
   * ProgramStudi without action
   */
  export type ProgramStudiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
  }


  /**
   * Model ProgramStudiField
   */

  export type AggregateProgramStudiField = {
    _count: ProgramStudiFieldCountAggregateOutputType | null
    _avg: ProgramStudiFieldAvgAggregateOutputType | null
    _sum: ProgramStudiFieldSumAggregateOutputType | null
    _min: ProgramStudiFieldMinAggregateOutputType | null
    _max: ProgramStudiFieldMaxAggregateOutputType | null
  }

  export type ProgramStudiFieldAvgAggregateOutputType = {
    order: number | null
  }

  export type ProgramStudiFieldSumAggregateOutputType = {
    order: number | null
  }

  export type ProgramStudiFieldMinAggregateOutputType = {
    id: string | null
    programStudiId: string | null
    fieldName: string | null
    fieldType: string | null
    isRequired: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramStudiFieldMaxAggregateOutputType = {
    id: string | null
    programStudiId: string | null
    fieldName: string | null
    fieldType: string | null
    isRequired: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramStudiFieldCountAggregateOutputType = {
    id: number
    programStudiId: number
    fieldName: number
    fieldType: number
    isRequired: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgramStudiFieldAvgAggregateInputType = {
    order?: true
  }

  export type ProgramStudiFieldSumAggregateInputType = {
    order?: true
  }

  export type ProgramStudiFieldMinAggregateInputType = {
    id?: true
    programStudiId?: true
    fieldName?: true
    fieldType?: true
    isRequired?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramStudiFieldMaxAggregateInputType = {
    id?: true
    programStudiId?: true
    fieldName?: true
    fieldType?: true
    isRequired?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramStudiFieldCountAggregateInputType = {
    id?: true
    programStudiId?: true
    fieldName?: true
    fieldType?: true
    isRequired?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgramStudiFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramStudiField to aggregate.
     */
    where?: ProgramStudiFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudiFields to fetch.
     */
    orderBy?: ProgramStudiFieldOrderByWithRelationInput | ProgramStudiFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramStudiFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudiFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudiFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramStudiFields
    **/
    _count?: true | ProgramStudiFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramStudiFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramStudiFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramStudiFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramStudiFieldMaxAggregateInputType
  }

  export type GetProgramStudiFieldAggregateType<T extends ProgramStudiFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramStudiField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramStudiField[P]>
      : GetScalarType<T[P], AggregateProgramStudiField[P]>
  }




  export type ProgramStudiFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramStudiFieldWhereInput
    orderBy?: ProgramStudiFieldOrderByWithAggregationInput | ProgramStudiFieldOrderByWithAggregationInput[]
    by: ProgramStudiFieldScalarFieldEnum[] | ProgramStudiFieldScalarFieldEnum
    having?: ProgramStudiFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramStudiFieldCountAggregateInputType | true
    _avg?: ProgramStudiFieldAvgAggregateInputType
    _sum?: ProgramStudiFieldSumAggregateInputType
    _min?: ProgramStudiFieldMinAggregateInputType
    _max?: ProgramStudiFieldMaxAggregateInputType
  }

  export type ProgramStudiFieldGroupByOutputType = {
    id: string
    programStudiId: string
    fieldName: string
    fieldType: string
    isRequired: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ProgramStudiFieldCountAggregateOutputType | null
    _avg: ProgramStudiFieldAvgAggregateOutputType | null
    _sum: ProgramStudiFieldSumAggregateOutputType | null
    _min: ProgramStudiFieldMinAggregateOutputType | null
    _max: ProgramStudiFieldMaxAggregateOutputType | null
  }

  type GetProgramStudiFieldGroupByPayload<T extends ProgramStudiFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramStudiFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramStudiFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramStudiFieldGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramStudiFieldGroupByOutputType[P]>
        }
      >
    >


  export type ProgramStudiFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programStudiId?: boolean
    fieldName?: boolean
    fieldType?: boolean
    isRequired?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    programStudi?: boolean | ProgramStudiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programStudiField"]>



  export type ProgramStudiFieldSelectScalar = {
    id?: boolean
    programStudiId?: boolean
    fieldName?: boolean
    fieldType?: boolean
    isRequired?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgramStudiFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programStudiId" | "fieldName" | "fieldType" | "isRequired" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["programStudiField"]>
  export type ProgramStudiFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programStudi?: boolean | ProgramStudiDefaultArgs<ExtArgs>
  }

  export type $ProgramStudiFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramStudiField"
    objects: {
      programStudi: Prisma.$ProgramStudiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      programStudiId: string
      fieldName: string
      fieldType: string
      isRequired: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["programStudiField"]>
    composites: {}
  }

  type ProgramStudiFieldGetPayload<S extends boolean | null | undefined | ProgramStudiFieldDefaultArgs> = $Result.GetResult<Prisma.$ProgramStudiFieldPayload, S>

  type ProgramStudiFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramStudiFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramStudiFieldCountAggregateInputType | true
    }

  export interface ProgramStudiFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramStudiField'], meta: { name: 'ProgramStudiField' } }
    /**
     * Find zero or one ProgramStudiField that matches the filter.
     * @param {ProgramStudiFieldFindUniqueArgs} args - Arguments to find a ProgramStudiField
     * @example
     * // Get one ProgramStudiField
     * const programStudiField = await prisma.programStudiField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramStudiFieldFindUniqueArgs>(args: SelectSubset<T, ProgramStudiFieldFindUniqueArgs<ExtArgs>>): Prisma__ProgramStudiFieldClient<$Result.GetResult<Prisma.$ProgramStudiFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgramStudiField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramStudiFieldFindUniqueOrThrowArgs} args - Arguments to find a ProgramStudiField
     * @example
     * // Get one ProgramStudiField
     * const programStudiField = await prisma.programStudiField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramStudiFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramStudiFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramStudiFieldClient<$Result.GetResult<Prisma.$ProgramStudiFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramStudiField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFieldFindFirstArgs} args - Arguments to find a ProgramStudiField
     * @example
     * // Get one ProgramStudiField
     * const programStudiField = await prisma.programStudiField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramStudiFieldFindFirstArgs>(args?: SelectSubset<T, ProgramStudiFieldFindFirstArgs<ExtArgs>>): Prisma__ProgramStudiFieldClient<$Result.GetResult<Prisma.$ProgramStudiFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramStudiField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFieldFindFirstOrThrowArgs} args - Arguments to find a ProgramStudiField
     * @example
     * // Get one ProgramStudiField
     * const programStudiField = await prisma.programStudiField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramStudiFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramStudiFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramStudiFieldClient<$Result.GetResult<Prisma.$ProgramStudiFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgramStudiFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramStudiFields
     * const programStudiFields = await prisma.programStudiField.findMany()
     * 
     * // Get first 10 ProgramStudiFields
     * const programStudiFields = await prisma.programStudiField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programStudiFieldWithIdOnly = await prisma.programStudiField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramStudiFieldFindManyArgs>(args?: SelectSubset<T, ProgramStudiFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramStudiFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgramStudiField.
     * @param {ProgramStudiFieldCreateArgs} args - Arguments to create a ProgramStudiField.
     * @example
     * // Create one ProgramStudiField
     * const ProgramStudiField = await prisma.programStudiField.create({
     *   data: {
     *     // ... data to create a ProgramStudiField
     *   }
     * })
     * 
     */
    create<T extends ProgramStudiFieldCreateArgs>(args: SelectSubset<T, ProgramStudiFieldCreateArgs<ExtArgs>>): Prisma__ProgramStudiFieldClient<$Result.GetResult<Prisma.$ProgramStudiFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgramStudiFields.
     * @param {ProgramStudiFieldCreateManyArgs} args - Arguments to create many ProgramStudiFields.
     * @example
     * // Create many ProgramStudiFields
     * const programStudiField = await prisma.programStudiField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramStudiFieldCreateManyArgs>(args?: SelectSubset<T, ProgramStudiFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgramStudiField.
     * @param {ProgramStudiFieldDeleteArgs} args - Arguments to delete one ProgramStudiField.
     * @example
     * // Delete one ProgramStudiField
     * const ProgramStudiField = await prisma.programStudiField.delete({
     *   where: {
     *     // ... filter to delete one ProgramStudiField
     *   }
     * })
     * 
     */
    delete<T extends ProgramStudiFieldDeleteArgs>(args: SelectSubset<T, ProgramStudiFieldDeleteArgs<ExtArgs>>): Prisma__ProgramStudiFieldClient<$Result.GetResult<Prisma.$ProgramStudiFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgramStudiField.
     * @param {ProgramStudiFieldUpdateArgs} args - Arguments to update one ProgramStudiField.
     * @example
     * // Update one ProgramStudiField
     * const programStudiField = await prisma.programStudiField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramStudiFieldUpdateArgs>(args: SelectSubset<T, ProgramStudiFieldUpdateArgs<ExtArgs>>): Prisma__ProgramStudiFieldClient<$Result.GetResult<Prisma.$ProgramStudiFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgramStudiFields.
     * @param {ProgramStudiFieldDeleteManyArgs} args - Arguments to filter ProgramStudiFields to delete.
     * @example
     * // Delete a few ProgramStudiFields
     * const { count } = await prisma.programStudiField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramStudiFieldDeleteManyArgs>(args?: SelectSubset<T, ProgramStudiFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramStudiFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramStudiFields
     * const programStudiField = await prisma.programStudiField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramStudiFieldUpdateManyArgs>(args: SelectSubset<T, ProgramStudiFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgramStudiField.
     * @param {ProgramStudiFieldUpsertArgs} args - Arguments to update or create a ProgramStudiField.
     * @example
     * // Update or create a ProgramStudiField
     * const programStudiField = await prisma.programStudiField.upsert({
     *   create: {
     *     // ... data to create a ProgramStudiField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramStudiField we want to update
     *   }
     * })
     */
    upsert<T extends ProgramStudiFieldUpsertArgs>(args: SelectSubset<T, ProgramStudiFieldUpsertArgs<ExtArgs>>): Prisma__ProgramStudiFieldClient<$Result.GetResult<Prisma.$ProgramStudiFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgramStudiFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFieldCountArgs} args - Arguments to filter ProgramStudiFields to count.
     * @example
     * // Count the number of ProgramStudiFields
     * const count = await prisma.programStudiField.count({
     *   where: {
     *     // ... the filter for the ProgramStudiFields we want to count
     *   }
     * })
    **/
    count<T extends ProgramStudiFieldCountArgs>(
      args?: Subset<T, ProgramStudiFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramStudiFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramStudiField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramStudiFieldAggregateArgs>(args: Subset<T, ProgramStudiFieldAggregateArgs>): Prisma.PrismaPromise<GetProgramStudiFieldAggregateType<T>>

    /**
     * Group by ProgramStudiField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgramStudiFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramStudiFieldGroupByArgs['orderBy'] }
        : { orderBy?: ProgramStudiFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramStudiFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramStudiFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramStudiField model
   */
  readonly fields: ProgramStudiFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramStudiField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramStudiFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programStudi<T extends ProgramStudiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramStudiDefaultArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgramStudiField model
   */
  interface ProgramStudiFieldFieldRefs {
    readonly id: FieldRef<"ProgramStudiField", 'String'>
    readonly programStudiId: FieldRef<"ProgramStudiField", 'String'>
    readonly fieldName: FieldRef<"ProgramStudiField", 'String'>
    readonly fieldType: FieldRef<"ProgramStudiField", 'String'>
    readonly isRequired: FieldRef<"ProgramStudiField", 'Boolean'>
    readonly order: FieldRef<"ProgramStudiField", 'Int'>
    readonly createdAt: FieldRef<"ProgramStudiField", 'DateTime'>
    readonly updatedAt: FieldRef<"ProgramStudiField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgramStudiField findUnique
   */
  export type ProgramStudiFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudiField to fetch.
     */
    where: ProgramStudiFieldWhereUniqueInput
  }

  /**
   * ProgramStudiField findUniqueOrThrow
   */
  export type ProgramStudiFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudiField to fetch.
     */
    where: ProgramStudiFieldWhereUniqueInput
  }

  /**
   * ProgramStudiField findFirst
   */
  export type ProgramStudiFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudiField to fetch.
     */
    where?: ProgramStudiFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudiFields to fetch.
     */
    orderBy?: ProgramStudiFieldOrderByWithRelationInput | ProgramStudiFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramStudiFields.
     */
    cursor?: ProgramStudiFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudiFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudiFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramStudiFields.
     */
    distinct?: ProgramStudiFieldScalarFieldEnum | ProgramStudiFieldScalarFieldEnum[]
  }

  /**
   * ProgramStudiField findFirstOrThrow
   */
  export type ProgramStudiFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudiField to fetch.
     */
    where?: ProgramStudiFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudiFields to fetch.
     */
    orderBy?: ProgramStudiFieldOrderByWithRelationInput | ProgramStudiFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramStudiFields.
     */
    cursor?: ProgramStudiFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudiFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudiFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramStudiFields.
     */
    distinct?: ProgramStudiFieldScalarFieldEnum | ProgramStudiFieldScalarFieldEnum[]
  }

  /**
   * ProgramStudiField findMany
   */
  export type ProgramStudiFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudiFields to fetch.
     */
    where?: ProgramStudiFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudiFields to fetch.
     */
    orderBy?: ProgramStudiFieldOrderByWithRelationInput | ProgramStudiFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramStudiFields.
     */
    cursor?: ProgramStudiFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudiFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudiFields.
     */
    skip?: number
    distinct?: ProgramStudiFieldScalarFieldEnum | ProgramStudiFieldScalarFieldEnum[]
  }

  /**
   * ProgramStudiField create
   */
  export type ProgramStudiFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramStudiField.
     */
    data: XOR<ProgramStudiFieldCreateInput, ProgramStudiFieldUncheckedCreateInput>
  }

  /**
   * ProgramStudiField createMany
   */
  export type ProgramStudiFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramStudiFields.
     */
    data: ProgramStudiFieldCreateManyInput | ProgramStudiFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgramStudiField update
   */
  export type ProgramStudiFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramStudiField.
     */
    data: XOR<ProgramStudiFieldUpdateInput, ProgramStudiFieldUncheckedUpdateInput>
    /**
     * Choose, which ProgramStudiField to update.
     */
    where: ProgramStudiFieldWhereUniqueInput
  }

  /**
   * ProgramStudiField updateMany
   */
  export type ProgramStudiFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramStudiFields.
     */
    data: XOR<ProgramStudiFieldUpdateManyMutationInput, ProgramStudiFieldUncheckedUpdateManyInput>
    /**
     * Filter which ProgramStudiFields to update
     */
    where?: ProgramStudiFieldWhereInput
    /**
     * Limit how many ProgramStudiFields to update.
     */
    limit?: number
  }

  /**
   * ProgramStudiField upsert
   */
  export type ProgramStudiFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramStudiField to update in case it exists.
     */
    where: ProgramStudiFieldWhereUniqueInput
    /**
     * In case the ProgramStudiField found by the `where` argument doesn't exist, create a new ProgramStudiField with this data.
     */
    create: XOR<ProgramStudiFieldCreateInput, ProgramStudiFieldUncheckedCreateInput>
    /**
     * In case the ProgramStudiField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramStudiFieldUpdateInput, ProgramStudiFieldUncheckedUpdateInput>
  }

  /**
   * ProgramStudiField delete
   */
  export type ProgramStudiFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
    /**
     * Filter which ProgramStudiField to delete.
     */
    where: ProgramStudiFieldWhereUniqueInput
  }

  /**
   * ProgramStudiField deleteMany
   */
  export type ProgramStudiFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramStudiFields to delete
     */
    where?: ProgramStudiFieldWhereInput
    /**
     * Limit how many ProgramStudiFields to delete.
     */
    limit?: number
  }

  /**
   * ProgramStudiField without action
   */
  export type ProgramStudiFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiField
     */
    select?: ProgramStudiFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudiField
     */
    omit?: ProgramStudiFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiFieldInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PenggunaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    username: 'username',
    password: 'password',
    peran: 'peran',
    avatar: 'avatar',
    programStudiId: 'programStudiId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PenggunaScalarFieldEnum = (typeof PenggunaScalarFieldEnum)[keyof typeof PenggunaScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    id: 'id',
    penggunaId: 'penggunaId',
    pembimbingId: 'pembimbingId',
    semester: 'semester',
    judulDisertasi: 'judulDisertasi',
    angkatan: 'angkatan',
    tempatTanggalLahir: 'tempatTanggalLahir',
    alamat: 'alamat',
    alamatKeluarga: 'alamatKeluarga',
    tahunLulus: 'tahunLulus',
    mulaiMasukPendidikan: 'mulaiMasukPendidikan',
    pekerjaan: 'pekerjaan',
    nomorTelpon: 'nomorTelpon',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const DosenScalarFieldEnum: {
    id: 'id',
    penggunaId: 'penggunaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const LogbookScalarFieldEnum: {
    id: 'id',
    mahasiswaId: 'mahasiswaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    penggunaId: 'penggunaId'
  };

  export type LogbookScalarFieldEnum = (typeof LogbookScalarFieldEnum)[keyof typeof LogbookScalarFieldEnum]


  export const RiwayatPerubahanPembimbingScalarFieldEnum: {
    id: 'id',
    mahasiswaId: 'mahasiswaId',
    alasan: 'alasan',
    pembimbingIdLama: 'pembimbingIdLama',
    promotorIdLama: 'promotorIdLama',
    koPromotorIdLama: 'koPromotorIdLama',
    pembimbingIdBaru: 'pembimbingIdBaru',
    promotorIdBaru: 'promotorIdBaru',
    koPromotorIdBaru: 'koPromotorIdBaru',
    changedAt: 'changedAt'
  };

  export type RiwayatPerubahanPembimbingScalarFieldEnum = (typeof RiwayatPerubahanPembimbingScalarFieldEnum)[keyof typeof RiwayatPerubahanPembimbingScalarFieldEnum]


  export const KegiatanScalarFieldEnum: {
    id: 'id',
    logbookId: 'logbookId',
    mataKuliahId: 'mataKuliahId',
    fieldsData: 'fieldsData',
    status: 'status',
    alasanDitolak: 'alasanDitolak',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KegiatanScalarFieldEnum = (typeof KegiatanScalarFieldEnum)[keyof typeof KegiatanScalarFieldEnum]


  export const MataKuliahScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    semester: 'semester',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    programStudiId: 'programStudiId'
  };

  export type MataKuliahScalarFieldEnum = (typeof MataKuliahScalarFieldEnum)[keyof typeof MataKuliahScalarFieldEnum]


  export const LampiranScalarFieldEnum: {
    id: 'id',
    kegiatanId: 'kegiatanId',
    namaFile: 'namaFile',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LampiranScalarFieldEnum = (typeof LampiranScalarFieldEnum)[keyof typeof LampiranScalarFieldEnum]


  export const PermohonanBimbinganScalarFieldEnum: {
    id: 'id',
    mahasiswaId: 'mahasiswaId',
    dosenId: 'dosenId',
    status: 'status',
    pesan: 'pesan',
    alasanDitolak: 'alasanDitolak',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermohonanBimbinganScalarFieldEnum = (typeof PermohonanBimbinganScalarFieldEnum)[keyof typeof PermohonanBimbinganScalarFieldEnum]


  export const NotifikasiScalarFieldEnum: {
    id: 'id',
    penggunaId: 'penggunaId',
    judul: 'judul',
    pesan: 'pesan',
    isRead: 'isRead',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotifikasiScalarFieldEnum = (typeof NotifikasiScalarFieldEnum)[keyof typeof NotifikasiScalarFieldEnum]


  export const ProgramStudiScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    displayName: 'displayName',
    templateSingleFieldForDate: 'templateSingleFieldForDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgramStudiScalarFieldEnum = (typeof ProgramStudiScalarFieldEnum)[keyof typeof ProgramStudiScalarFieldEnum]


  export const ProgramStudiFieldScalarFieldEnum: {
    id: 'id',
    programStudiId: 'programStudiId',
    fieldName: 'fieldName',
    fieldType: 'fieldType',
    isRequired: 'isRequired',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgramStudiFieldScalarFieldEnum = (typeof ProgramStudiFieldScalarFieldEnum)[keyof typeof ProgramStudiFieldScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PenggunaOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    username: 'username',
    password: 'password',
    peran: 'peran',
    avatar: 'avatar',
    programStudiId: 'programStudiId'
  };

  export type PenggunaOrderByRelevanceFieldEnum = (typeof PenggunaOrderByRelevanceFieldEnum)[keyof typeof PenggunaOrderByRelevanceFieldEnum]


  export const MahasiswaOrderByRelevanceFieldEnum: {
    id: 'id',
    penggunaId: 'penggunaId',
    pembimbingId: 'pembimbingId',
    judulDisertasi: 'judulDisertasi',
    angkatan: 'angkatan',
    tempatTanggalLahir: 'tempatTanggalLahir',
    alamat: 'alamat',
    alamatKeluarga: 'alamatKeluarga',
    tahunLulus: 'tahunLulus',
    pekerjaan: 'pekerjaan',
    nomorTelpon: 'nomorTelpon',
    email: 'email'
  };

  export type MahasiswaOrderByRelevanceFieldEnum = (typeof MahasiswaOrderByRelevanceFieldEnum)[keyof typeof MahasiswaOrderByRelevanceFieldEnum]


  export const DosenOrderByRelevanceFieldEnum: {
    id: 'id',
    penggunaId: 'penggunaId'
  };

  export type DosenOrderByRelevanceFieldEnum = (typeof DosenOrderByRelevanceFieldEnum)[keyof typeof DosenOrderByRelevanceFieldEnum]


  export const LogbookOrderByRelevanceFieldEnum: {
    id: 'id',
    mahasiswaId: 'mahasiswaId',
    penggunaId: 'penggunaId'
  };

  export type LogbookOrderByRelevanceFieldEnum = (typeof LogbookOrderByRelevanceFieldEnum)[keyof typeof LogbookOrderByRelevanceFieldEnum]


  export const RiwayatPerubahanPembimbingOrderByRelevanceFieldEnum: {
    id: 'id',
    mahasiswaId: 'mahasiswaId',
    alasan: 'alasan',
    pembimbingIdLama: 'pembimbingIdLama',
    promotorIdLama: 'promotorIdLama',
    koPromotorIdLama: 'koPromotorIdLama',
    pembimbingIdBaru: 'pembimbingIdBaru',
    promotorIdBaru: 'promotorIdBaru',
    koPromotorIdBaru: 'koPromotorIdBaru'
  };

  export type RiwayatPerubahanPembimbingOrderByRelevanceFieldEnum = (typeof RiwayatPerubahanPembimbingOrderByRelevanceFieldEnum)[keyof typeof RiwayatPerubahanPembimbingOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const KegiatanOrderByRelevanceFieldEnum: {
    id: 'id',
    logbookId: 'logbookId',
    status: 'status',
    alasanDitolak: 'alasanDitolak'
  };

  export type KegiatanOrderByRelevanceFieldEnum = (typeof KegiatanOrderByRelevanceFieldEnum)[keyof typeof KegiatanOrderByRelevanceFieldEnum]


  export const MataKuliahOrderByRelevanceFieldEnum: {
    judul: 'judul',
    programStudiId: 'programStudiId'
  };

  export type MataKuliahOrderByRelevanceFieldEnum = (typeof MataKuliahOrderByRelevanceFieldEnum)[keyof typeof MataKuliahOrderByRelevanceFieldEnum]


  export const LampiranOrderByRelevanceFieldEnum: {
    id: 'id',
    kegiatanId: 'kegiatanId',
    namaFile: 'namaFile',
    url: 'url'
  };

  export type LampiranOrderByRelevanceFieldEnum = (typeof LampiranOrderByRelevanceFieldEnum)[keyof typeof LampiranOrderByRelevanceFieldEnum]


  export const PermohonanBimbinganOrderByRelevanceFieldEnum: {
    id: 'id',
    mahasiswaId: 'mahasiswaId',
    dosenId: 'dosenId',
    status: 'status',
    pesan: 'pesan',
    alasanDitolak: 'alasanDitolak'
  };

  export type PermohonanBimbinganOrderByRelevanceFieldEnum = (typeof PermohonanBimbinganOrderByRelevanceFieldEnum)[keyof typeof PermohonanBimbinganOrderByRelevanceFieldEnum]


  export const NotifikasiOrderByRelevanceFieldEnum: {
    id: 'id',
    penggunaId: 'penggunaId',
    judul: 'judul',
    pesan: 'pesan'
  };

  export type NotifikasiOrderByRelevanceFieldEnum = (typeof NotifikasiOrderByRelevanceFieldEnum)[keyof typeof NotifikasiOrderByRelevanceFieldEnum]


  export const ProgramStudiOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    displayName: 'displayName'
  };

  export type ProgramStudiOrderByRelevanceFieldEnum = (typeof ProgramStudiOrderByRelevanceFieldEnum)[keyof typeof ProgramStudiOrderByRelevanceFieldEnum]


  export const ProgramStudiFieldOrderByRelevanceFieldEnum: {
    id: 'id',
    programStudiId: 'programStudiId',
    fieldName: 'fieldName',
    fieldType: 'fieldType'
  };

  export type ProgramStudiFieldOrderByRelevanceFieldEnum = (typeof ProgramStudiFieldOrderByRelevanceFieldEnum)[keyof typeof ProgramStudiFieldOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PenggunaWhereInput = {
    AND?: PenggunaWhereInput | PenggunaWhereInput[]
    OR?: PenggunaWhereInput[]
    NOT?: PenggunaWhereInput | PenggunaWhereInput[]
    id?: StringFilter<"Pengguna"> | string
    nama?: StringFilter<"Pengguna"> | string
    username?: StringFilter<"Pengguna"> | string
    password?: StringFilter<"Pengguna"> | string
    peran?: StringFilter<"Pengguna"> | string
    avatar?: StringNullableFilter<"Pengguna"> | string | null
    programStudiId?: StringFilter<"Pengguna"> | string
    createdAt?: DateTimeFilter<"Pengguna"> | Date | string
    updatedAt?: DateTimeFilter<"Pengguna"> | Date | string
    mahasiswa?: XOR<MahasiswaNullableScalarRelationFilter, MahasiswaWhereInput> | null
    dosen?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
    notifikasi?: NotifikasiListRelationFilter
    logbook?: LogbookListRelationFilter
    programStudi?: XOR<ProgramStudiScalarRelationFilter, ProgramStudiWhereInput>
  }

  export type PenggunaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    avatar?: SortOrderInput | SortOrder
    programStudiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mahasiswa?: MahasiswaOrderByWithRelationInput
    dosen?: DosenOrderByWithRelationInput
    notifikasi?: NotifikasiOrderByRelationAggregateInput
    logbook?: LogbookOrderByRelationAggregateInput
    programStudi?: ProgramStudiOrderByWithRelationInput
    _relevance?: PenggunaOrderByRelevanceInput
  }

  export type PenggunaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: PenggunaWhereInput | PenggunaWhereInput[]
    OR?: PenggunaWhereInput[]
    NOT?: PenggunaWhereInput | PenggunaWhereInput[]
    nama?: StringFilter<"Pengguna"> | string
    password?: StringFilter<"Pengguna"> | string
    peran?: StringFilter<"Pengguna"> | string
    avatar?: StringNullableFilter<"Pengguna"> | string | null
    programStudiId?: StringFilter<"Pengguna"> | string
    createdAt?: DateTimeFilter<"Pengguna"> | Date | string
    updatedAt?: DateTimeFilter<"Pengguna"> | Date | string
    mahasiswa?: XOR<MahasiswaNullableScalarRelationFilter, MahasiswaWhereInput> | null
    dosen?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
    notifikasi?: NotifikasiListRelationFilter
    logbook?: LogbookListRelationFilter
    programStudi?: XOR<ProgramStudiScalarRelationFilter, ProgramStudiWhereInput>
  }, "id" | "username">

  export type PenggunaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    avatar?: SortOrderInput | SortOrder
    programStudiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PenggunaCountOrderByAggregateInput
    _max?: PenggunaMaxOrderByAggregateInput
    _min?: PenggunaMinOrderByAggregateInput
  }

  export type PenggunaScalarWhereWithAggregatesInput = {
    AND?: PenggunaScalarWhereWithAggregatesInput | PenggunaScalarWhereWithAggregatesInput[]
    OR?: PenggunaScalarWhereWithAggregatesInput[]
    NOT?: PenggunaScalarWhereWithAggregatesInput | PenggunaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pengguna"> | string
    nama?: StringWithAggregatesFilter<"Pengguna"> | string
    username?: StringWithAggregatesFilter<"Pengguna"> | string
    password?: StringWithAggregatesFilter<"Pengguna"> | string
    peran?: StringWithAggregatesFilter<"Pengguna"> | string
    avatar?: StringNullableWithAggregatesFilter<"Pengguna"> | string | null
    programStudiId?: StringWithAggregatesFilter<"Pengguna"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pengguna"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pengguna"> | Date | string
  }

  export type MahasiswaWhereInput = {
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    id?: StringFilter<"Mahasiswa"> | string
    penggunaId?: StringFilter<"Mahasiswa"> | string
    pembimbingId?: StringNullableFilter<"Mahasiswa"> | string | null
    semester?: IntNullableFilter<"Mahasiswa"> | number | null
    judulDisertasi?: StringNullableFilter<"Mahasiswa"> | string | null
    angkatan?: StringNullableFilter<"Mahasiswa"> | string | null
    tempatTanggalLahir?: StringNullableFilter<"Mahasiswa"> | string | null
    alamat?: StringNullableFilter<"Mahasiswa"> | string | null
    alamatKeluarga?: StringNullableFilter<"Mahasiswa"> | string | null
    tahunLulus?: StringNullableFilter<"Mahasiswa"> | string | null
    mulaiMasukPendidikan?: DateTimeNullableFilter<"Mahasiswa"> | Date | string | null
    pekerjaan?: StringNullableFilter<"Mahasiswa"> | string | null
    nomorTelpon?: StringNullableFilter<"Mahasiswa"> | string | null
    email?: StringNullableFilter<"Mahasiswa"> | string | null
    createdAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    updatedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    pengguna?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
    logbook?: LogbookListRelationFilter
    pembimbing?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
    permohonanBimbingan?: PermohonanBimbinganListRelationFilter
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingListRelationFilter
  }

  export type MahasiswaOrderByWithRelationInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    pembimbingId?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    judulDisertasi?: SortOrderInput | SortOrder
    angkatan?: SortOrderInput | SortOrder
    tempatTanggalLahir?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    alamatKeluarga?: SortOrderInput | SortOrder
    tahunLulus?: SortOrderInput | SortOrder
    mulaiMasukPendidikan?: SortOrderInput | SortOrder
    pekerjaan?: SortOrderInput | SortOrder
    nomorTelpon?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengguna?: PenggunaOrderByWithRelationInput
    logbook?: LogbookOrderByRelationAggregateInput
    pembimbing?: DosenOrderByWithRelationInput
    permohonanBimbingan?: PermohonanBimbinganOrderByRelationAggregateInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingOrderByRelationAggregateInput
    _relevance?: MahasiswaOrderByRelevanceInput
  }

  export type MahasiswaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    penggunaId?: string
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    pembimbingId?: StringNullableFilter<"Mahasiswa"> | string | null
    semester?: IntNullableFilter<"Mahasiswa"> | number | null
    judulDisertasi?: StringNullableFilter<"Mahasiswa"> | string | null
    angkatan?: StringNullableFilter<"Mahasiswa"> | string | null
    tempatTanggalLahir?: StringNullableFilter<"Mahasiswa"> | string | null
    alamat?: StringNullableFilter<"Mahasiswa"> | string | null
    alamatKeluarga?: StringNullableFilter<"Mahasiswa"> | string | null
    tahunLulus?: StringNullableFilter<"Mahasiswa"> | string | null
    mulaiMasukPendidikan?: DateTimeNullableFilter<"Mahasiswa"> | Date | string | null
    pekerjaan?: StringNullableFilter<"Mahasiswa"> | string | null
    nomorTelpon?: StringNullableFilter<"Mahasiswa"> | string | null
    email?: StringNullableFilter<"Mahasiswa"> | string | null
    createdAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    updatedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    pengguna?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
    logbook?: LogbookListRelationFilter
    pembimbing?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
    permohonanBimbingan?: PermohonanBimbinganListRelationFilter
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingListRelationFilter
  }, "id" | "penggunaId">

  export type MahasiswaOrderByWithAggregationInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    pembimbingId?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    judulDisertasi?: SortOrderInput | SortOrder
    angkatan?: SortOrderInput | SortOrder
    tempatTanggalLahir?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    alamatKeluarga?: SortOrderInput | SortOrder
    tahunLulus?: SortOrderInput | SortOrder
    mulaiMasukPendidikan?: SortOrderInput | SortOrder
    pekerjaan?: SortOrderInput | SortOrder
    nomorTelpon?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MahasiswaCountOrderByAggregateInput
    _avg?: MahasiswaAvgOrderByAggregateInput
    _max?: MahasiswaMaxOrderByAggregateInput
    _min?: MahasiswaMinOrderByAggregateInput
    _sum?: MahasiswaSumOrderByAggregateInput
  }

  export type MahasiswaScalarWhereWithAggregatesInput = {
    AND?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    OR?: MahasiswaScalarWhereWithAggregatesInput[]
    NOT?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mahasiswa"> | string
    penggunaId?: StringWithAggregatesFilter<"Mahasiswa"> | string
    pembimbingId?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    semester?: IntNullableWithAggregatesFilter<"Mahasiswa"> | number | null
    judulDisertasi?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    angkatan?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    tempatTanggalLahir?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    alamatKeluarga?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    tahunLulus?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    mulaiMasukPendidikan?: DateTimeNullableWithAggregatesFilter<"Mahasiswa"> | Date | string | null
    pekerjaan?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    nomorTelpon?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    email?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Mahasiswa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mahasiswa"> | Date | string
  }

  export type DosenWhereInput = {
    AND?: DosenWhereInput | DosenWhereInput[]
    OR?: DosenWhereInput[]
    NOT?: DosenWhereInput | DosenWhereInput[]
    id?: StringFilter<"Dosen"> | string
    penggunaId?: StringFilter<"Dosen"> | string
    createdAt?: DateTimeFilter<"Dosen"> | Date | string
    updatedAt?: DateTimeFilter<"Dosen"> | Date | string
    pengguna?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
    mahasiswaBimbingan?: MahasiswaListRelationFilter
    permohonanBimbingan?: PermohonanBimbinganListRelationFilter
  }

  export type DosenOrderByWithRelationInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengguna?: PenggunaOrderByWithRelationInput
    mahasiswaBimbingan?: MahasiswaOrderByRelationAggregateInput
    permohonanBimbingan?: PermohonanBimbinganOrderByRelationAggregateInput
    _relevance?: DosenOrderByRelevanceInput
  }

  export type DosenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    penggunaId?: string
    AND?: DosenWhereInput | DosenWhereInput[]
    OR?: DosenWhereInput[]
    NOT?: DosenWhereInput | DosenWhereInput[]
    createdAt?: DateTimeFilter<"Dosen"> | Date | string
    updatedAt?: DateTimeFilter<"Dosen"> | Date | string
    pengguna?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
    mahasiswaBimbingan?: MahasiswaListRelationFilter
    permohonanBimbingan?: PermohonanBimbinganListRelationFilter
  }, "id" | "penggunaId">

  export type DosenOrderByWithAggregationInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DosenCountOrderByAggregateInput
    _max?: DosenMaxOrderByAggregateInput
    _min?: DosenMinOrderByAggregateInput
  }

  export type DosenScalarWhereWithAggregatesInput = {
    AND?: DosenScalarWhereWithAggregatesInput | DosenScalarWhereWithAggregatesInput[]
    OR?: DosenScalarWhereWithAggregatesInput[]
    NOT?: DosenScalarWhereWithAggregatesInput | DosenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dosen"> | string
    penggunaId?: StringWithAggregatesFilter<"Dosen"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dosen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dosen"> | Date | string
  }

  export type LogbookWhereInput = {
    AND?: LogbookWhereInput | LogbookWhereInput[]
    OR?: LogbookWhereInput[]
    NOT?: LogbookWhereInput | LogbookWhereInput[]
    id?: StringFilter<"Logbook"> | string
    mahasiswaId?: StringFilter<"Logbook"> | string
    createdAt?: DateTimeFilter<"Logbook"> | Date | string
    updatedAt?: DateTimeFilter<"Logbook"> | Date | string
    penggunaId?: StringNullableFilter<"Logbook"> | string | null
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    kegiatan?: KegiatanListRelationFilter
    Pengguna?: XOR<PenggunaNullableScalarRelationFilter, PenggunaWhereInput> | null
  }

  export type LogbookOrderByWithRelationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penggunaId?: SortOrderInput | SortOrder
    mahasiswa?: MahasiswaOrderByWithRelationInput
    kegiatan?: KegiatanOrderByRelationAggregateInput
    Pengguna?: PenggunaOrderByWithRelationInput
    _relevance?: LogbookOrderByRelevanceInput
  }

  export type LogbookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogbookWhereInput | LogbookWhereInput[]
    OR?: LogbookWhereInput[]
    NOT?: LogbookWhereInput | LogbookWhereInput[]
    mahasiswaId?: StringFilter<"Logbook"> | string
    createdAt?: DateTimeFilter<"Logbook"> | Date | string
    updatedAt?: DateTimeFilter<"Logbook"> | Date | string
    penggunaId?: StringNullableFilter<"Logbook"> | string | null
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    kegiatan?: KegiatanListRelationFilter
    Pengguna?: XOR<PenggunaNullableScalarRelationFilter, PenggunaWhereInput> | null
  }, "id">

  export type LogbookOrderByWithAggregationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penggunaId?: SortOrderInput | SortOrder
    _count?: LogbookCountOrderByAggregateInput
    _max?: LogbookMaxOrderByAggregateInput
    _min?: LogbookMinOrderByAggregateInput
  }

  export type LogbookScalarWhereWithAggregatesInput = {
    AND?: LogbookScalarWhereWithAggregatesInput | LogbookScalarWhereWithAggregatesInput[]
    OR?: LogbookScalarWhereWithAggregatesInput[]
    NOT?: LogbookScalarWhereWithAggregatesInput | LogbookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Logbook"> | string
    mahasiswaId?: StringWithAggregatesFilter<"Logbook"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Logbook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Logbook"> | Date | string
    penggunaId?: StringNullableWithAggregatesFilter<"Logbook"> | string | null
  }

  export type RiwayatPerubahanPembimbingWhereInput = {
    AND?: RiwayatPerubahanPembimbingWhereInput | RiwayatPerubahanPembimbingWhereInput[]
    OR?: RiwayatPerubahanPembimbingWhereInput[]
    NOT?: RiwayatPerubahanPembimbingWhereInput | RiwayatPerubahanPembimbingWhereInput[]
    id?: StringFilter<"RiwayatPerubahanPembimbing"> | string
    mahasiswaId?: StringFilter<"RiwayatPerubahanPembimbing"> | string
    alasan?: StringFilter<"RiwayatPerubahanPembimbing"> | string
    pembimbingIdLama?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    promotorIdLama?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    koPromotorIdLama?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    pembimbingIdBaru?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    promotorIdBaru?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    koPromotorIdBaru?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    changedAt?: DateTimeFilter<"RiwayatPerubahanPembimbing"> | Date | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
  }

  export type RiwayatPerubahanPembimbingOrderByWithRelationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    alasan?: SortOrder
    pembimbingIdLama?: SortOrderInput | SortOrder
    promotorIdLama?: SortOrderInput | SortOrder
    koPromotorIdLama?: SortOrderInput | SortOrder
    pembimbingIdBaru?: SortOrderInput | SortOrder
    promotorIdBaru?: SortOrderInput | SortOrder
    koPromotorIdBaru?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    mahasiswa?: MahasiswaOrderByWithRelationInput
    _relevance?: RiwayatPerubahanPembimbingOrderByRelevanceInput
  }

  export type RiwayatPerubahanPembimbingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RiwayatPerubahanPembimbingWhereInput | RiwayatPerubahanPembimbingWhereInput[]
    OR?: RiwayatPerubahanPembimbingWhereInput[]
    NOT?: RiwayatPerubahanPembimbingWhereInput | RiwayatPerubahanPembimbingWhereInput[]
    mahasiswaId?: StringFilter<"RiwayatPerubahanPembimbing"> | string
    alasan?: StringFilter<"RiwayatPerubahanPembimbing"> | string
    pembimbingIdLama?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    promotorIdLama?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    koPromotorIdLama?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    pembimbingIdBaru?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    promotorIdBaru?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    koPromotorIdBaru?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    changedAt?: DateTimeFilter<"RiwayatPerubahanPembimbing"> | Date | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
  }, "id">

  export type RiwayatPerubahanPembimbingOrderByWithAggregationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    alasan?: SortOrder
    pembimbingIdLama?: SortOrderInput | SortOrder
    promotorIdLama?: SortOrderInput | SortOrder
    koPromotorIdLama?: SortOrderInput | SortOrder
    pembimbingIdBaru?: SortOrderInput | SortOrder
    promotorIdBaru?: SortOrderInput | SortOrder
    koPromotorIdBaru?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    _count?: RiwayatPerubahanPembimbingCountOrderByAggregateInput
    _max?: RiwayatPerubahanPembimbingMaxOrderByAggregateInput
    _min?: RiwayatPerubahanPembimbingMinOrderByAggregateInput
  }

  export type RiwayatPerubahanPembimbingScalarWhereWithAggregatesInput = {
    AND?: RiwayatPerubahanPembimbingScalarWhereWithAggregatesInput | RiwayatPerubahanPembimbingScalarWhereWithAggregatesInput[]
    OR?: RiwayatPerubahanPembimbingScalarWhereWithAggregatesInput[]
    NOT?: RiwayatPerubahanPembimbingScalarWhereWithAggregatesInput | RiwayatPerubahanPembimbingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiwayatPerubahanPembimbing"> | string
    mahasiswaId?: StringWithAggregatesFilter<"RiwayatPerubahanPembimbing"> | string
    alasan?: StringWithAggregatesFilter<"RiwayatPerubahanPembimbing"> | string
    pembimbingIdLama?: StringNullableWithAggregatesFilter<"RiwayatPerubahanPembimbing"> | string | null
    promotorIdLama?: StringNullableWithAggregatesFilter<"RiwayatPerubahanPembimbing"> | string | null
    koPromotorIdLama?: StringNullableWithAggregatesFilter<"RiwayatPerubahanPembimbing"> | string | null
    pembimbingIdBaru?: StringNullableWithAggregatesFilter<"RiwayatPerubahanPembimbing"> | string | null
    promotorIdBaru?: StringNullableWithAggregatesFilter<"RiwayatPerubahanPembimbing"> | string | null
    koPromotorIdBaru?: StringNullableWithAggregatesFilter<"RiwayatPerubahanPembimbing"> | string | null
    changedAt?: DateTimeWithAggregatesFilter<"RiwayatPerubahanPembimbing"> | Date | string
  }

  export type KegiatanWhereInput = {
    AND?: KegiatanWhereInput | KegiatanWhereInput[]
    OR?: KegiatanWhereInput[]
    NOT?: KegiatanWhereInput | KegiatanWhereInput[]
    id?: StringFilter<"Kegiatan"> | string
    logbookId?: StringFilter<"Kegiatan"> | string
    mataKuliahId?: IntFilter<"Kegiatan"> | number
    fieldsData?: JsonNullableFilter<"Kegiatan">
    status?: StringFilter<"Kegiatan"> | string
    alasanDitolak?: StringNullableFilter<"Kegiatan"> | string | null
    createdAt?: DateTimeFilter<"Kegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"Kegiatan"> | Date | string
    logbook?: XOR<LogbookScalarRelationFilter, LogbookWhereInput>
    MataKuliah?: XOR<MataKuliahScalarRelationFilter, MataKuliahWhereInput>
    lampiran?: LampiranListRelationFilter
  }

  export type KegiatanOrderByWithRelationInput = {
    id?: SortOrder
    logbookId?: SortOrder
    mataKuliahId?: SortOrder
    fieldsData?: SortOrderInput | SortOrder
    status?: SortOrder
    alasanDitolak?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logbook?: LogbookOrderByWithRelationInput
    MataKuliah?: MataKuliahOrderByWithRelationInput
    lampiran?: LampiranOrderByRelationAggregateInput
    _relevance?: KegiatanOrderByRelevanceInput
  }

  export type KegiatanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KegiatanWhereInput | KegiatanWhereInput[]
    OR?: KegiatanWhereInput[]
    NOT?: KegiatanWhereInput | KegiatanWhereInput[]
    logbookId?: StringFilter<"Kegiatan"> | string
    mataKuliahId?: IntFilter<"Kegiatan"> | number
    fieldsData?: JsonNullableFilter<"Kegiatan">
    status?: StringFilter<"Kegiatan"> | string
    alasanDitolak?: StringNullableFilter<"Kegiatan"> | string | null
    createdAt?: DateTimeFilter<"Kegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"Kegiatan"> | Date | string
    logbook?: XOR<LogbookScalarRelationFilter, LogbookWhereInput>
    MataKuliah?: XOR<MataKuliahScalarRelationFilter, MataKuliahWhereInput>
    lampiran?: LampiranListRelationFilter
  }, "id">

  export type KegiatanOrderByWithAggregationInput = {
    id?: SortOrder
    logbookId?: SortOrder
    mataKuliahId?: SortOrder
    fieldsData?: SortOrderInput | SortOrder
    status?: SortOrder
    alasanDitolak?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KegiatanCountOrderByAggregateInput
    _avg?: KegiatanAvgOrderByAggregateInput
    _max?: KegiatanMaxOrderByAggregateInput
    _min?: KegiatanMinOrderByAggregateInput
    _sum?: KegiatanSumOrderByAggregateInput
  }

  export type KegiatanScalarWhereWithAggregatesInput = {
    AND?: KegiatanScalarWhereWithAggregatesInput | KegiatanScalarWhereWithAggregatesInput[]
    OR?: KegiatanScalarWhereWithAggregatesInput[]
    NOT?: KegiatanScalarWhereWithAggregatesInput | KegiatanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kegiatan"> | string
    logbookId?: StringWithAggregatesFilter<"Kegiatan"> | string
    mataKuliahId?: IntWithAggregatesFilter<"Kegiatan"> | number
    fieldsData?: JsonNullableWithAggregatesFilter<"Kegiatan">
    status?: StringWithAggregatesFilter<"Kegiatan"> | string
    alasanDitolak?: StringNullableWithAggregatesFilter<"Kegiatan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Kegiatan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kegiatan"> | Date | string
  }

  export type MataKuliahWhereInput = {
    AND?: MataKuliahWhereInput | MataKuliahWhereInput[]
    OR?: MataKuliahWhereInput[]
    NOT?: MataKuliahWhereInput | MataKuliahWhereInput[]
    id?: IntFilter<"MataKuliah"> | number
    judul?: StringFilter<"MataKuliah"> | string
    semester?: IntFilter<"MataKuliah"> | number
    createdAt?: DateTimeFilter<"MataKuliah"> | Date | string
    updatedAt?: DateTimeFilter<"MataKuliah"> | Date | string
    programStudiId?: StringNullableFilter<"MataKuliah"> | string | null
    kegiatan?: KegiatanListRelationFilter
    ProgramStudi?: XOR<ProgramStudiNullableScalarRelationFilter, ProgramStudiWhereInput> | null
  }

  export type MataKuliahOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    programStudiId?: SortOrderInput | SortOrder
    kegiatan?: KegiatanOrderByRelationAggregateInput
    ProgramStudi?: ProgramStudiOrderByWithRelationInput
    _relevance?: MataKuliahOrderByRelevanceInput
  }

  export type MataKuliahWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    judul_semester?: MataKuliahJudulSemesterCompoundUniqueInput
    AND?: MataKuliahWhereInput | MataKuliahWhereInput[]
    OR?: MataKuliahWhereInput[]
    NOT?: MataKuliahWhereInput | MataKuliahWhereInput[]
    judul?: StringFilter<"MataKuliah"> | string
    semester?: IntFilter<"MataKuliah"> | number
    createdAt?: DateTimeFilter<"MataKuliah"> | Date | string
    updatedAt?: DateTimeFilter<"MataKuliah"> | Date | string
    programStudiId?: StringNullableFilter<"MataKuliah"> | string | null
    kegiatan?: KegiatanListRelationFilter
    ProgramStudi?: XOR<ProgramStudiNullableScalarRelationFilter, ProgramStudiWhereInput> | null
  }, "id" | "judul_semester">

  export type MataKuliahOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    programStudiId?: SortOrderInput | SortOrder
    _count?: MataKuliahCountOrderByAggregateInput
    _avg?: MataKuliahAvgOrderByAggregateInput
    _max?: MataKuliahMaxOrderByAggregateInput
    _min?: MataKuliahMinOrderByAggregateInput
    _sum?: MataKuliahSumOrderByAggregateInput
  }

  export type MataKuliahScalarWhereWithAggregatesInput = {
    AND?: MataKuliahScalarWhereWithAggregatesInput | MataKuliahScalarWhereWithAggregatesInput[]
    OR?: MataKuliahScalarWhereWithAggregatesInput[]
    NOT?: MataKuliahScalarWhereWithAggregatesInput | MataKuliahScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MataKuliah"> | number
    judul?: StringWithAggregatesFilter<"MataKuliah"> | string
    semester?: IntWithAggregatesFilter<"MataKuliah"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MataKuliah"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MataKuliah"> | Date | string
    programStudiId?: StringNullableWithAggregatesFilter<"MataKuliah"> | string | null
  }

  export type LampiranWhereInput = {
    AND?: LampiranWhereInput | LampiranWhereInput[]
    OR?: LampiranWhereInput[]
    NOT?: LampiranWhereInput | LampiranWhereInput[]
    id?: StringFilter<"Lampiran"> | string
    kegiatanId?: StringFilter<"Lampiran"> | string
    namaFile?: StringFilter<"Lampiran"> | string
    url?: StringFilter<"Lampiran"> | string
    createdAt?: DateTimeFilter<"Lampiran"> | Date | string
    updatedAt?: DateTimeFilter<"Lampiran"> | Date | string
    kegiatan?: XOR<KegiatanScalarRelationFilter, KegiatanWhereInput>
  }

  export type LampiranOrderByWithRelationInput = {
    id?: SortOrder
    kegiatanId?: SortOrder
    namaFile?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kegiatan?: KegiatanOrderByWithRelationInput
    _relevance?: LampiranOrderByRelevanceInput
  }

  export type LampiranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LampiranWhereInput | LampiranWhereInput[]
    OR?: LampiranWhereInput[]
    NOT?: LampiranWhereInput | LampiranWhereInput[]
    kegiatanId?: StringFilter<"Lampiran"> | string
    namaFile?: StringFilter<"Lampiran"> | string
    url?: StringFilter<"Lampiran"> | string
    createdAt?: DateTimeFilter<"Lampiran"> | Date | string
    updatedAt?: DateTimeFilter<"Lampiran"> | Date | string
    kegiatan?: XOR<KegiatanScalarRelationFilter, KegiatanWhereInput>
  }, "id">

  export type LampiranOrderByWithAggregationInput = {
    id?: SortOrder
    kegiatanId?: SortOrder
    namaFile?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LampiranCountOrderByAggregateInput
    _max?: LampiranMaxOrderByAggregateInput
    _min?: LampiranMinOrderByAggregateInput
  }

  export type LampiranScalarWhereWithAggregatesInput = {
    AND?: LampiranScalarWhereWithAggregatesInput | LampiranScalarWhereWithAggregatesInput[]
    OR?: LampiranScalarWhereWithAggregatesInput[]
    NOT?: LampiranScalarWhereWithAggregatesInput | LampiranScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lampiran"> | string
    kegiatanId?: StringWithAggregatesFilter<"Lampiran"> | string
    namaFile?: StringWithAggregatesFilter<"Lampiran"> | string
    url?: StringWithAggregatesFilter<"Lampiran"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lampiran"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lampiran"> | Date | string
  }

  export type PermohonanBimbinganWhereInput = {
    AND?: PermohonanBimbinganWhereInput | PermohonanBimbinganWhereInput[]
    OR?: PermohonanBimbinganWhereInput[]
    NOT?: PermohonanBimbinganWhereInput | PermohonanBimbinganWhereInput[]
    id?: StringFilter<"PermohonanBimbingan"> | string
    mahasiswaId?: StringFilter<"PermohonanBimbingan"> | string
    dosenId?: StringFilter<"PermohonanBimbingan"> | string
    status?: StringFilter<"PermohonanBimbingan"> | string
    pesan?: StringNullableFilter<"PermohonanBimbingan"> | string | null
    alasanDitolak?: StringNullableFilter<"PermohonanBimbingan"> | string | null
    createdAt?: DateTimeFilter<"PermohonanBimbingan"> | Date | string
    updatedAt?: DateTimeFilter<"PermohonanBimbingan"> | Date | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, DosenWhereInput>
  }

  export type PermohonanBimbinganOrderByWithRelationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    dosenId?: SortOrder
    status?: SortOrder
    pesan?: SortOrderInput | SortOrder
    alasanDitolak?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mahasiswa?: MahasiswaOrderByWithRelationInput
    dosen?: DosenOrderByWithRelationInput
    _relevance?: PermohonanBimbinganOrderByRelevanceInput
  }

  export type PermohonanBimbinganWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PermohonanBimbinganWhereInput | PermohonanBimbinganWhereInput[]
    OR?: PermohonanBimbinganWhereInput[]
    NOT?: PermohonanBimbinganWhereInput | PermohonanBimbinganWhereInput[]
    mahasiswaId?: StringFilter<"PermohonanBimbingan"> | string
    dosenId?: StringFilter<"PermohonanBimbingan"> | string
    status?: StringFilter<"PermohonanBimbingan"> | string
    pesan?: StringNullableFilter<"PermohonanBimbingan"> | string | null
    alasanDitolak?: StringNullableFilter<"PermohonanBimbingan"> | string | null
    createdAt?: DateTimeFilter<"PermohonanBimbingan"> | Date | string
    updatedAt?: DateTimeFilter<"PermohonanBimbingan"> | Date | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, DosenWhereInput>
  }, "id">

  export type PermohonanBimbinganOrderByWithAggregationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    dosenId?: SortOrder
    status?: SortOrder
    pesan?: SortOrderInput | SortOrder
    alasanDitolak?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermohonanBimbinganCountOrderByAggregateInput
    _max?: PermohonanBimbinganMaxOrderByAggregateInput
    _min?: PermohonanBimbinganMinOrderByAggregateInput
  }

  export type PermohonanBimbinganScalarWhereWithAggregatesInput = {
    AND?: PermohonanBimbinganScalarWhereWithAggregatesInput | PermohonanBimbinganScalarWhereWithAggregatesInput[]
    OR?: PermohonanBimbinganScalarWhereWithAggregatesInput[]
    NOT?: PermohonanBimbinganScalarWhereWithAggregatesInput | PermohonanBimbinganScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PermohonanBimbingan"> | string
    mahasiswaId?: StringWithAggregatesFilter<"PermohonanBimbingan"> | string
    dosenId?: StringWithAggregatesFilter<"PermohonanBimbingan"> | string
    status?: StringWithAggregatesFilter<"PermohonanBimbingan"> | string
    pesan?: StringNullableWithAggregatesFilter<"PermohonanBimbingan"> | string | null
    alasanDitolak?: StringNullableWithAggregatesFilter<"PermohonanBimbingan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PermohonanBimbingan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PermohonanBimbingan"> | Date | string
  }

  export type NotifikasiWhereInput = {
    AND?: NotifikasiWhereInput | NotifikasiWhereInput[]
    OR?: NotifikasiWhereInput[]
    NOT?: NotifikasiWhereInput | NotifikasiWhereInput[]
    id?: StringFilter<"Notifikasi"> | string
    penggunaId?: StringFilter<"Notifikasi"> | string
    judul?: StringFilter<"Notifikasi"> | string
    pesan?: StringFilter<"Notifikasi"> | string
    isRead?: BoolFilter<"Notifikasi"> | boolean
    createdAt?: DateTimeFilter<"Notifikasi"> | Date | string
    updatedAt?: DateTimeFilter<"Notifikasi"> | Date | string
    pengguna?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
  }

  export type NotifikasiOrderByWithRelationInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    judul?: SortOrder
    pesan?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengguna?: PenggunaOrderByWithRelationInput
    _relevance?: NotifikasiOrderByRelevanceInput
  }

  export type NotifikasiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotifikasiWhereInput | NotifikasiWhereInput[]
    OR?: NotifikasiWhereInput[]
    NOT?: NotifikasiWhereInput | NotifikasiWhereInput[]
    penggunaId?: StringFilter<"Notifikasi"> | string
    judul?: StringFilter<"Notifikasi"> | string
    pesan?: StringFilter<"Notifikasi"> | string
    isRead?: BoolFilter<"Notifikasi"> | boolean
    createdAt?: DateTimeFilter<"Notifikasi"> | Date | string
    updatedAt?: DateTimeFilter<"Notifikasi"> | Date | string
    pengguna?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
  }, "id">

  export type NotifikasiOrderByWithAggregationInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    judul?: SortOrder
    pesan?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotifikasiCountOrderByAggregateInput
    _max?: NotifikasiMaxOrderByAggregateInput
    _min?: NotifikasiMinOrderByAggregateInput
  }

  export type NotifikasiScalarWhereWithAggregatesInput = {
    AND?: NotifikasiScalarWhereWithAggregatesInput | NotifikasiScalarWhereWithAggregatesInput[]
    OR?: NotifikasiScalarWhereWithAggregatesInput[]
    NOT?: NotifikasiScalarWhereWithAggregatesInput | NotifikasiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notifikasi"> | string
    penggunaId?: StringWithAggregatesFilter<"Notifikasi"> | string
    judul?: StringWithAggregatesFilter<"Notifikasi"> | string
    pesan?: StringWithAggregatesFilter<"Notifikasi"> | string
    isRead?: BoolWithAggregatesFilter<"Notifikasi"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notifikasi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notifikasi"> | Date | string
  }

  export type ProgramStudiWhereInput = {
    AND?: ProgramStudiWhereInput | ProgramStudiWhereInput[]
    OR?: ProgramStudiWhereInput[]
    NOT?: ProgramStudiWhereInput | ProgramStudiWhereInput[]
    id?: StringFilter<"ProgramStudi"> | string
    nama?: StringFilter<"ProgramStudi"> | string
    displayName?: StringFilter<"ProgramStudi"> | string
    templateSingleFieldForDate?: BoolFilter<"ProgramStudi"> | boolean
    createdAt?: DateTimeFilter<"ProgramStudi"> | Date | string
    updatedAt?: DateTimeFilter<"ProgramStudi"> | Date | string
    pengguna?: PenggunaListRelationFilter
    fields?: ProgramStudiFieldListRelationFilter
    mataKuliah?: MataKuliahListRelationFilter
  }

  export type ProgramStudiOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    displayName?: SortOrder
    templateSingleFieldForDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengguna?: PenggunaOrderByRelationAggregateInput
    fields?: ProgramStudiFieldOrderByRelationAggregateInput
    mataKuliah?: MataKuliahOrderByRelationAggregateInput
    _relevance?: ProgramStudiOrderByRelevanceInput
  }

  export type ProgramStudiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: ProgramStudiWhereInput | ProgramStudiWhereInput[]
    OR?: ProgramStudiWhereInput[]
    NOT?: ProgramStudiWhereInput | ProgramStudiWhereInput[]
    displayName?: StringFilter<"ProgramStudi"> | string
    templateSingleFieldForDate?: BoolFilter<"ProgramStudi"> | boolean
    createdAt?: DateTimeFilter<"ProgramStudi"> | Date | string
    updatedAt?: DateTimeFilter<"ProgramStudi"> | Date | string
    pengguna?: PenggunaListRelationFilter
    fields?: ProgramStudiFieldListRelationFilter
    mataKuliah?: MataKuliahListRelationFilter
  }, "id" | "nama">

  export type ProgramStudiOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    displayName?: SortOrder
    templateSingleFieldForDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgramStudiCountOrderByAggregateInput
    _max?: ProgramStudiMaxOrderByAggregateInput
    _min?: ProgramStudiMinOrderByAggregateInput
  }

  export type ProgramStudiScalarWhereWithAggregatesInput = {
    AND?: ProgramStudiScalarWhereWithAggregatesInput | ProgramStudiScalarWhereWithAggregatesInput[]
    OR?: ProgramStudiScalarWhereWithAggregatesInput[]
    NOT?: ProgramStudiScalarWhereWithAggregatesInput | ProgramStudiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgramStudi"> | string
    nama?: StringWithAggregatesFilter<"ProgramStudi"> | string
    displayName?: StringWithAggregatesFilter<"ProgramStudi"> | string
    templateSingleFieldForDate?: BoolWithAggregatesFilter<"ProgramStudi"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProgramStudi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProgramStudi"> | Date | string
  }

  export type ProgramStudiFieldWhereInput = {
    AND?: ProgramStudiFieldWhereInput | ProgramStudiFieldWhereInput[]
    OR?: ProgramStudiFieldWhereInput[]
    NOT?: ProgramStudiFieldWhereInput | ProgramStudiFieldWhereInput[]
    id?: StringFilter<"ProgramStudiField"> | string
    programStudiId?: StringFilter<"ProgramStudiField"> | string
    fieldName?: StringFilter<"ProgramStudiField"> | string
    fieldType?: StringFilter<"ProgramStudiField"> | string
    isRequired?: BoolFilter<"ProgramStudiField"> | boolean
    order?: IntFilter<"ProgramStudiField"> | number
    createdAt?: DateTimeFilter<"ProgramStudiField"> | Date | string
    updatedAt?: DateTimeFilter<"ProgramStudiField"> | Date | string
    programStudi?: XOR<ProgramStudiScalarRelationFilter, ProgramStudiWhereInput>
  }

  export type ProgramStudiFieldOrderByWithRelationInput = {
    id?: SortOrder
    programStudiId?: SortOrder
    fieldName?: SortOrder
    fieldType?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    programStudi?: ProgramStudiOrderByWithRelationInput
    _relevance?: ProgramStudiFieldOrderByRelevanceInput
  }

  export type ProgramStudiFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    programStudiId_fieldName?: ProgramStudiFieldProgramStudiIdFieldNameCompoundUniqueInput
    AND?: ProgramStudiFieldWhereInput | ProgramStudiFieldWhereInput[]
    OR?: ProgramStudiFieldWhereInput[]
    NOT?: ProgramStudiFieldWhereInput | ProgramStudiFieldWhereInput[]
    programStudiId?: StringFilter<"ProgramStudiField"> | string
    fieldName?: StringFilter<"ProgramStudiField"> | string
    fieldType?: StringFilter<"ProgramStudiField"> | string
    isRequired?: BoolFilter<"ProgramStudiField"> | boolean
    order?: IntFilter<"ProgramStudiField"> | number
    createdAt?: DateTimeFilter<"ProgramStudiField"> | Date | string
    updatedAt?: DateTimeFilter<"ProgramStudiField"> | Date | string
    programStudi?: XOR<ProgramStudiScalarRelationFilter, ProgramStudiWhereInput>
  }, "id" | "programStudiId_fieldName">

  export type ProgramStudiFieldOrderByWithAggregationInput = {
    id?: SortOrder
    programStudiId?: SortOrder
    fieldName?: SortOrder
    fieldType?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgramStudiFieldCountOrderByAggregateInput
    _avg?: ProgramStudiFieldAvgOrderByAggregateInput
    _max?: ProgramStudiFieldMaxOrderByAggregateInput
    _min?: ProgramStudiFieldMinOrderByAggregateInput
    _sum?: ProgramStudiFieldSumOrderByAggregateInput
  }

  export type ProgramStudiFieldScalarWhereWithAggregatesInput = {
    AND?: ProgramStudiFieldScalarWhereWithAggregatesInput | ProgramStudiFieldScalarWhereWithAggregatesInput[]
    OR?: ProgramStudiFieldScalarWhereWithAggregatesInput[]
    NOT?: ProgramStudiFieldScalarWhereWithAggregatesInput | ProgramStudiFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgramStudiField"> | string
    programStudiId?: StringWithAggregatesFilter<"ProgramStudiField"> | string
    fieldName?: StringWithAggregatesFilter<"ProgramStudiField"> | string
    fieldType?: StringWithAggregatesFilter<"ProgramStudiField"> | string
    isRequired?: BoolWithAggregatesFilter<"ProgramStudiField"> | boolean
    order?: IntWithAggregatesFilter<"ProgramStudiField"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProgramStudiField"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProgramStudiField"> | Date | string
  }

  export type PenggunaCreateInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa?: MahasiswaCreateNestedOneWithoutPenggunaInput
    dosen?: DosenCreateNestedOneWithoutPenggunaInput
    notifikasi?: NotifikasiCreateNestedManyWithoutPenggunaInput
    logbook?: LogbookCreateNestedManyWithoutPenggunaInput
    programStudi: ProgramStudiCreateNestedOneWithoutPenggunaInput
  }

  export type PenggunaUncheckedCreateInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    programStudiId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa?: MahasiswaUncheckedCreateNestedOneWithoutPenggunaInput
    dosen?: DosenUncheckedCreateNestedOneWithoutPenggunaInput
    notifikasi?: NotifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    logbook?: LogbookUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneWithoutPenggunaNestedInput
    dosen?: DosenUpdateOneWithoutPenggunaNestedInput
    notifikasi?: NotifikasiUpdateManyWithoutPenggunaNestedInput
    logbook?: LogbookUpdateManyWithoutPenggunaNestedInput
    programStudi?: ProgramStudiUpdateOneRequiredWithoutPenggunaNestedInput
  }

  export type PenggunaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    programStudiId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUncheckedUpdateOneWithoutPenggunaNestedInput
    dosen?: DosenUncheckedUpdateOneWithoutPenggunaNestedInput
    notifikasi?: NotifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    logbook?: LogbookUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type PenggunaCreateManyInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    programStudiId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenggunaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenggunaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    programStudiId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaCreateInput = {
    id?: string
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutMahasiswaInput
    logbook?: LogbookCreateNestedManyWithoutMahasiswaInput
    pembimbing?: DosenCreateNestedOneWithoutMahasiswaBimbinganInput
    permohonanBimbingan?: PermohonanBimbinganCreateNestedManyWithoutMahasiswaInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateInput = {
    id?: string
    penggunaId: string
    pembimbingId?: string | null
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logbook?: LogbookUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutMahasiswaNestedInput
    logbook?: LogbookUpdateManyWithoutMahasiswaNestedInput
    pembimbing?: DosenUpdateOneWithoutMahasiswaBimbinganNestedInput
    permohonanBimbingan?: PermohonanBimbinganUpdateManyWithoutMahasiswaNestedInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logbook?: LogbookUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaCreateManyInput = {
    id?: string
    penggunaId: string
    pembimbingId?: string | null
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutDosenInput
    mahasiswaBimbingan?: MahasiswaCreateNestedManyWithoutPembimbingInput
    permohonanBimbingan?: PermohonanBimbinganCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateInput = {
    id?: string
    penggunaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswaBimbingan?: MahasiswaUncheckedCreateNestedManyWithoutPembimbingInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutDosenNestedInput
    mahasiswaBimbingan?: MahasiswaUpdateManyWithoutPembimbingNestedInput
    permohonanBimbingan?: PermohonanBimbinganUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswaBimbingan?: MahasiswaUncheckedUpdateManyWithoutPembimbingNestedInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type DosenCreateManyInput = {
    id?: string
    penggunaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DosenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogbookCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutLogbookInput
    kegiatan?: KegiatanCreateNestedManyWithoutLogbookInput
    Pengguna?: PenggunaCreateNestedOneWithoutLogbookInput
  }

  export type LogbookUncheckedCreateInput = {
    id?: string
    mahasiswaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    penggunaId?: string | null
    kegiatan?: KegiatanUncheckedCreateNestedManyWithoutLogbookInput
  }

  export type LogbookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutLogbookNestedInput
    kegiatan?: KegiatanUpdateManyWithoutLogbookNestedInput
    Pengguna?: PenggunaUpdateOneWithoutLogbookNestedInput
  }

  export type LogbookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penggunaId?: NullableStringFieldUpdateOperationsInput | string | null
    kegiatan?: KegiatanUncheckedUpdateManyWithoutLogbookNestedInput
  }

  export type LogbookCreateManyInput = {
    id?: string
    mahasiswaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    penggunaId?: string | null
  }

  export type LogbookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogbookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penggunaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RiwayatPerubahanPembimbingCreateInput = {
    id?: string
    alasan: string
    pembimbingIdLama?: string | null
    promotorIdLama?: string | null
    koPromotorIdLama?: string | null
    pembimbingIdBaru?: string | null
    promotorIdBaru?: string | null
    koPromotorIdBaru?: string | null
    changedAt?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutRiwayatPerubahanPembimbingInput
  }

  export type RiwayatPerubahanPembimbingUncheckedCreateInput = {
    id?: string
    mahasiswaId: string
    alasan: string
    pembimbingIdLama?: string | null
    promotorIdLama?: string | null
    koPromotorIdLama?: string | null
    pembimbingIdBaru?: string | null
    promotorIdBaru?: string | null
    koPromotorIdBaru?: string | null
    changedAt?: Date | string
  }

  export type RiwayatPerubahanPembimbingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alasan?: StringFieldUpdateOperationsInput | string
    pembimbingIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutRiwayatPerubahanPembimbingNestedInput
  }

  export type RiwayatPerubahanPembimbingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    alasan?: StringFieldUpdateOperationsInput | string
    pembimbingIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiwayatPerubahanPembimbingCreateManyInput = {
    id?: string
    mahasiswaId: string
    alasan: string
    pembimbingIdLama?: string | null
    promotorIdLama?: string | null
    koPromotorIdLama?: string | null
    pembimbingIdBaru?: string | null
    promotorIdBaru?: string | null
    koPromotorIdBaru?: string | null
    changedAt?: Date | string
  }

  export type RiwayatPerubahanPembimbingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alasan?: StringFieldUpdateOperationsInput | string
    pembimbingIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiwayatPerubahanPembimbingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    alasan?: StringFieldUpdateOperationsInput | string
    pembimbingIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KegiatanCreateInput = {
    id?: string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logbook: LogbookCreateNestedOneWithoutKegiatanInput
    MataKuliah: MataKuliahCreateNestedOneWithoutKegiatanInput
    lampiran?: LampiranCreateNestedManyWithoutKegiatanInput
  }

  export type KegiatanUncheckedCreateInput = {
    id?: string
    logbookId: string
    mataKuliahId: number
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lampiran?: LampiranUncheckedCreateNestedManyWithoutKegiatanInput
  }

  export type KegiatanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logbook?: LogbookUpdateOneRequiredWithoutKegiatanNestedInput
    MataKuliah?: MataKuliahUpdateOneRequiredWithoutKegiatanNestedInput
    lampiran?: LampiranUpdateManyWithoutKegiatanNestedInput
  }

  export type KegiatanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logbookId?: StringFieldUpdateOperationsInput | string
    mataKuliahId?: IntFieldUpdateOperationsInput | number
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lampiran?: LampiranUncheckedUpdateManyWithoutKegiatanNestedInput
  }

  export type KegiatanCreateManyInput = {
    id?: string
    logbookId: string
    mataKuliahId: number
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KegiatanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KegiatanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logbookId?: StringFieldUpdateOperationsInput | string
    mataKuliahId?: IntFieldUpdateOperationsInput | number
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MataKuliahCreateInput = {
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan?: KegiatanCreateNestedManyWithoutMataKuliahInput
    ProgramStudi?: ProgramStudiCreateNestedOneWithoutMataKuliahInput
  }

  export type MataKuliahUncheckedCreateInput = {
    id?: number
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
    programStudiId?: string | null
    kegiatan?: KegiatanUncheckedCreateNestedManyWithoutMataKuliahInput
  }

  export type MataKuliahUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: KegiatanUpdateManyWithoutMataKuliahNestedInput
    ProgramStudi?: ProgramStudiUpdateOneWithoutMataKuliahNestedInput
  }

  export type MataKuliahUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programStudiId?: NullableStringFieldUpdateOperationsInput | string | null
    kegiatan?: KegiatanUncheckedUpdateManyWithoutMataKuliahNestedInput
  }

  export type MataKuliahCreateManyInput = {
    id?: number
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
    programStudiId?: string | null
  }

  export type MataKuliahUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MataKuliahUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programStudiId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LampiranCreateInput = {
    id?: string
    namaFile: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan: KegiatanCreateNestedOneWithoutLampiranInput
  }

  export type LampiranUncheckedCreateInput = {
    id?: string
    kegiatanId: string
    namaFile: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LampiranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: KegiatanUpdateOneRequiredWithoutLampiranNestedInput
  }

  export type LampiranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kegiatanId?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampiranCreateManyInput = {
    id?: string
    kegiatanId: string
    namaFile: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LampiranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampiranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kegiatanId?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermohonanBimbinganCreateInput = {
    id?: string
    status?: string
    pesan?: string | null
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutPermohonanBimbinganInput
    dosen: DosenCreateNestedOneWithoutPermohonanBimbinganInput
  }

  export type PermohonanBimbinganUncheckedCreateInput = {
    id?: string
    mahasiswaId: string
    dosenId: string
    status?: string
    pesan?: string | null
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermohonanBimbinganUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pesan?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutPermohonanBimbinganNestedInput
    dosen?: DosenUpdateOneRequiredWithoutPermohonanBimbinganNestedInput
  }

  export type PermohonanBimbinganUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    dosenId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pesan?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermohonanBimbinganCreateManyInput = {
    id?: string
    mahasiswaId: string
    dosenId: string
    status?: string
    pesan?: string | null
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermohonanBimbinganUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pesan?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermohonanBimbinganUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    dosenId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pesan?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiCreateInput = {
    id?: string
    judul: string
    pesan: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutNotifikasiInput
  }

  export type NotifikasiUncheckedCreateInput = {
    id?: string
    penggunaId: string
    judul: string
    pesan: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotifikasiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutNotifikasiNestedInput
  }

  export type NotifikasiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiCreateManyInput = {
    id?: string
    penggunaId: string
    judul: string
    pesan: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotifikasiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramStudiCreateInput = {
    id?: string
    nama: string
    displayName: string
    templateSingleFieldForDate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna?: PenggunaCreateNestedManyWithoutProgramStudiInput
    fields?: ProgramStudiFieldCreateNestedManyWithoutProgramStudiInput
    mataKuliah?: MataKuliahCreateNestedManyWithoutProgramStudiInput
  }

  export type ProgramStudiUncheckedCreateInput = {
    id?: string
    nama: string
    displayName: string
    templateSingleFieldForDate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna?: PenggunaUncheckedCreateNestedManyWithoutProgramStudiInput
    fields?: ProgramStudiFieldUncheckedCreateNestedManyWithoutProgramStudiInput
    mataKuliah?: MataKuliahUncheckedCreateNestedManyWithoutProgramStudiInput
  }

  export type ProgramStudiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    templateSingleFieldForDate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateManyWithoutProgramStudiNestedInput
    fields?: ProgramStudiFieldUpdateManyWithoutProgramStudiNestedInput
    mataKuliah?: MataKuliahUpdateManyWithoutProgramStudiNestedInput
  }

  export type ProgramStudiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    templateSingleFieldForDate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUncheckedUpdateManyWithoutProgramStudiNestedInput
    fields?: ProgramStudiFieldUncheckedUpdateManyWithoutProgramStudiNestedInput
    mataKuliah?: MataKuliahUncheckedUpdateManyWithoutProgramStudiNestedInput
  }

  export type ProgramStudiCreateManyInput = {
    id?: string
    nama: string
    displayName: string
    templateSingleFieldForDate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramStudiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    templateSingleFieldForDate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramStudiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    templateSingleFieldForDate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramStudiFieldCreateInput = {
    id?: string
    fieldName: string
    fieldType: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    programStudi: ProgramStudiCreateNestedOneWithoutFieldsInput
  }

  export type ProgramStudiFieldUncheckedCreateInput = {
    id?: string
    programStudiId: string
    fieldName: string
    fieldType: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramStudiFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programStudi?: ProgramStudiUpdateOneRequiredWithoutFieldsNestedInput
  }

  export type ProgramStudiFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    programStudiId?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramStudiFieldCreateManyInput = {
    id?: string
    programStudiId: string
    fieldName: string
    fieldType: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramStudiFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramStudiFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    programStudiId?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MahasiswaNullableScalarRelationFilter = {
    is?: MahasiswaWhereInput | null
    isNot?: MahasiswaWhereInput | null
  }

  export type DosenNullableScalarRelationFilter = {
    is?: DosenWhereInput | null
    isNot?: DosenWhereInput | null
  }

  export type NotifikasiListRelationFilter = {
    every?: NotifikasiWhereInput
    some?: NotifikasiWhereInput
    none?: NotifikasiWhereInput
  }

  export type LogbookListRelationFilter = {
    every?: LogbookWhereInput
    some?: LogbookWhereInput
    none?: LogbookWhereInput
  }

  export type ProgramStudiScalarRelationFilter = {
    is?: ProgramStudiWhereInput
    isNot?: ProgramStudiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotifikasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogbookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PenggunaOrderByRelevanceInput = {
    fields: PenggunaOrderByRelevanceFieldEnum | PenggunaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PenggunaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    avatar?: SortOrder
    programStudiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PenggunaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    avatar?: SortOrder
    programStudiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PenggunaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    avatar?: SortOrder
    programStudiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PenggunaScalarRelationFilter = {
    is?: PenggunaWhereInput
    isNot?: PenggunaWhereInput
  }

  export type PermohonanBimbinganListRelationFilter = {
    every?: PermohonanBimbinganWhereInput
    some?: PermohonanBimbinganWhereInput
    none?: PermohonanBimbinganWhereInput
  }

  export type RiwayatPerubahanPembimbingListRelationFilter = {
    every?: RiwayatPerubahanPembimbingWhereInput
    some?: RiwayatPerubahanPembimbingWhereInput
    none?: RiwayatPerubahanPembimbingWhereInput
  }

  export type PermohonanBimbinganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RiwayatPerubahanPembimbingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MahasiswaOrderByRelevanceInput = {
    fields: MahasiswaOrderByRelevanceFieldEnum | MahasiswaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MahasiswaCountOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    pembimbingId?: SortOrder
    semester?: SortOrder
    judulDisertasi?: SortOrder
    angkatan?: SortOrder
    tempatTanggalLahir?: SortOrder
    alamat?: SortOrder
    alamatKeluarga?: SortOrder
    tahunLulus?: SortOrder
    mulaiMasukPendidikan?: SortOrder
    pekerjaan?: SortOrder
    nomorTelpon?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaAvgOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type MahasiswaMaxOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    pembimbingId?: SortOrder
    semester?: SortOrder
    judulDisertasi?: SortOrder
    angkatan?: SortOrder
    tempatTanggalLahir?: SortOrder
    alamat?: SortOrder
    alamatKeluarga?: SortOrder
    tahunLulus?: SortOrder
    mulaiMasukPendidikan?: SortOrder
    pekerjaan?: SortOrder
    nomorTelpon?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaMinOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    pembimbingId?: SortOrder
    semester?: SortOrder
    judulDisertasi?: SortOrder
    angkatan?: SortOrder
    tempatTanggalLahir?: SortOrder
    alamat?: SortOrder
    alamatKeluarga?: SortOrder
    tahunLulus?: SortOrder
    mulaiMasukPendidikan?: SortOrder
    pekerjaan?: SortOrder
    nomorTelpon?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaSumOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MahasiswaListRelationFilter = {
    every?: MahasiswaWhereInput
    some?: MahasiswaWhereInput
    none?: MahasiswaWhereInput
  }

  export type MahasiswaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DosenOrderByRelevanceInput = {
    fields: DosenOrderByRelevanceFieldEnum | DosenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DosenCountOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosenMaxOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosenMinOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaScalarRelationFilter = {
    is?: MahasiswaWhereInput
    isNot?: MahasiswaWhereInput
  }

  export type KegiatanListRelationFilter = {
    every?: KegiatanWhereInput
    some?: KegiatanWhereInput
    none?: KegiatanWhereInput
  }

  export type PenggunaNullableScalarRelationFilter = {
    is?: PenggunaWhereInput | null
    isNot?: PenggunaWhereInput | null
  }

  export type KegiatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogbookOrderByRelevanceInput = {
    fields: LogbookOrderByRelevanceFieldEnum | LogbookOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LogbookCountOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penggunaId?: SortOrder
  }

  export type LogbookMaxOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penggunaId?: SortOrder
  }

  export type LogbookMinOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penggunaId?: SortOrder
  }

  export type RiwayatPerubahanPembimbingOrderByRelevanceInput = {
    fields: RiwayatPerubahanPembimbingOrderByRelevanceFieldEnum | RiwayatPerubahanPembimbingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RiwayatPerubahanPembimbingCountOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    alasan?: SortOrder
    pembimbingIdLama?: SortOrder
    promotorIdLama?: SortOrder
    koPromotorIdLama?: SortOrder
    pembimbingIdBaru?: SortOrder
    promotorIdBaru?: SortOrder
    koPromotorIdBaru?: SortOrder
    changedAt?: SortOrder
  }

  export type RiwayatPerubahanPembimbingMaxOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    alasan?: SortOrder
    pembimbingIdLama?: SortOrder
    promotorIdLama?: SortOrder
    koPromotorIdLama?: SortOrder
    pembimbingIdBaru?: SortOrder
    promotorIdBaru?: SortOrder
    koPromotorIdBaru?: SortOrder
    changedAt?: SortOrder
  }

  export type RiwayatPerubahanPembimbingMinOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    alasan?: SortOrder
    pembimbingIdLama?: SortOrder
    promotorIdLama?: SortOrder
    koPromotorIdLama?: SortOrder
    pembimbingIdBaru?: SortOrder
    promotorIdBaru?: SortOrder
    koPromotorIdBaru?: SortOrder
    changedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LogbookScalarRelationFilter = {
    is?: LogbookWhereInput
    isNot?: LogbookWhereInput
  }

  export type MataKuliahScalarRelationFilter = {
    is?: MataKuliahWhereInput
    isNot?: MataKuliahWhereInput
  }

  export type LampiranListRelationFilter = {
    every?: LampiranWhereInput
    some?: LampiranWhereInput
    none?: LampiranWhereInput
  }

  export type LampiranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KegiatanOrderByRelevanceInput = {
    fields: KegiatanOrderByRelevanceFieldEnum | KegiatanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KegiatanCountOrderByAggregateInput = {
    id?: SortOrder
    logbookId?: SortOrder
    mataKuliahId?: SortOrder
    fieldsData?: SortOrder
    status?: SortOrder
    alasanDitolak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KegiatanAvgOrderByAggregateInput = {
    mataKuliahId?: SortOrder
  }

  export type KegiatanMaxOrderByAggregateInput = {
    id?: SortOrder
    logbookId?: SortOrder
    mataKuliahId?: SortOrder
    status?: SortOrder
    alasanDitolak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KegiatanMinOrderByAggregateInput = {
    id?: SortOrder
    logbookId?: SortOrder
    mataKuliahId?: SortOrder
    status?: SortOrder
    alasanDitolak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KegiatanSumOrderByAggregateInput = {
    mataKuliahId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ProgramStudiNullableScalarRelationFilter = {
    is?: ProgramStudiWhereInput | null
    isNot?: ProgramStudiWhereInput | null
  }

  export type MataKuliahOrderByRelevanceInput = {
    fields: MataKuliahOrderByRelevanceFieldEnum | MataKuliahOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MataKuliahJudulSemesterCompoundUniqueInput = {
    judul: string
    semester: number
  }

  export type MataKuliahCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    programStudiId?: SortOrder
  }

  export type MataKuliahAvgOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
  }

  export type MataKuliahMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    programStudiId?: SortOrder
  }

  export type MataKuliahMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    programStudiId?: SortOrder
  }

  export type MataKuliahSumOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
  }

  export type KegiatanScalarRelationFilter = {
    is?: KegiatanWhereInput
    isNot?: KegiatanWhereInput
  }

  export type LampiranOrderByRelevanceInput = {
    fields: LampiranOrderByRelevanceFieldEnum | LampiranOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LampiranCountOrderByAggregateInput = {
    id?: SortOrder
    kegiatanId?: SortOrder
    namaFile?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LampiranMaxOrderByAggregateInput = {
    id?: SortOrder
    kegiatanId?: SortOrder
    namaFile?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LampiranMinOrderByAggregateInput = {
    id?: SortOrder
    kegiatanId?: SortOrder
    namaFile?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosenScalarRelationFilter = {
    is?: DosenWhereInput
    isNot?: DosenWhereInput
  }

  export type PermohonanBimbinganOrderByRelevanceInput = {
    fields: PermohonanBimbinganOrderByRelevanceFieldEnum | PermohonanBimbinganOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PermohonanBimbinganCountOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    dosenId?: SortOrder
    status?: SortOrder
    pesan?: SortOrder
    alasanDitolak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermohonanBimbinganMaxOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    dosenId?: SortOrder
    status?: SortOrder
    pesan?: SortOrder
    alasanDitolak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermohonanBimbinganMinOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    dosenId?: SortOrder
    status?: SortOrder
    pesan?: SortOrder
    alasanDitolak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotifikasiOrderByRelevanceInput = {
    fields: NotifikasiOrderByRelevanceFieldEnum | NotifikasiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotifikasiCountOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    judul?: SortOrder
    pesan?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotifikasiMaxOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    judul?: SortOrder
    pesan?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotifikasiMinOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    judul?: SortOrder
    pesan?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PenggunaListRelationFilter = {
    every?: PenggunaWhereInput
    some?: PenggunaWhereInput
    none?: PenggunaWhereInput
  }

  export type ProgramStudiFieldListRelationFilter = {
    every?: ProgramStudiFieldWhereInput
    some?: ProgramStudiFieldWhereInput
    none?: ProgramStudiFieldWhereInput
  }

  export type MataKuliahListRelationFilter = {
    every?: MataKuliahWhereInput
    some?: MataKuliahWhereInput
    none?: MataKuliahWhereInput
  }

  export type PenggunaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramStudiFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MataKuliahOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramStudiOrderByRelevanceInput = {
    fields: ProgramStudiOrderByRelevanceFieldEnum | ProgramStudiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProgramStudiCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    displayName?: SortOrder
    templateSingleFieldForDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramStudiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    displayName?: SortOrder
    templateSingleFieldForDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramStudiMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    displayName?: SortOrder
    templateSingleFieldForDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramStudiFieldOrderByRelevanceInput = {
    fields: ProgramStudiFieldOrderByRelevanceFieldEnum | ProgramStudiFieldOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProgramStudiFieldProgramStudiIdFieldNameCompoundUniqueInput = {
    programStudiId: string
    fieldName: string
  }

  export type ProgramStudiFieldCountOrderByAggregateInput = {
    id?: SortOrder
    programStudiId?: SortOrder
    fieldName?: SortOrder
    fieldType?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramStudiFieldAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProgramStudiFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    programStudiId?: SortOrder
    fieldName?: SortOrder
    fieldType?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramStudiFieldMinOrderByAggregateInput = {
    id?: SortOrder
    programStudiId?: SortOrder
    fieldName?: SortOrder
    fieldType?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramStudiFieldSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type MahasiswaCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<MahasiswaCreateWithoutPenggunaInput, MahasiswaUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPenggunaInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type DosenCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<DosenCreateWithoutPenggunaInput, DosenUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: DosenCreateOrConnectWithoutPenggunaInput
    connect?: DosenWhereUniqueInput
  }

  export type NotifikasiCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<NotifikasiCreateWithoutPenggunaInput, NotifikasiUncheckedCreateWithoutPenggunaInput> | NotifikasiCreateWithoutPenggunaInput[] | NotifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: NotifikasiCreateOrConnectWithoutPenggunaInput | NotifikasiCreateOrConnectWithoutPenggunaInput[]
    createMany?: NotifikasiCreateManyPenggunaInputEnvelope
    connect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
  }

  export type LogbookCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<LogbookCreateWithoutPenggunaInput, LogbookUncheckedCreateWithoutPenggunaInput> | LogbookCreateWithoutPenggunaInput[] | LogbookUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LogbookCreateOrConnectWithoutPenggunaInput | LogbookCreateOrConnectWithoutPenggunaInput[]
    createMany?: LogbookCreateManyPenggunaInputEnvelope
    connect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
  }

  export type ProgramStudiCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<ProgramStudiCreateWithoutPenggunaInput, ProgramStudiUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: ProgramStudiCreateOrConnectWithoutPenggunaInput
    connect?: ProgramStudiWhereUniqueInput
  }

  export type MahasiswaUncheckedCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<MahasiswaCreateWithoutPenggunaInput, MahasiswaUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPenggunaInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type DosenUncheckedCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<DosenCreateWithoutPenggunaInput, DosenUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: DosenCreateOrConnectWithoutPenggunaInput
    connect?: DosenWhereUniqueInput
  }

  export type NotifikasiUncheckedCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<NotifikasiCreateWithoutPenggunaInput, NotifikasiUncheckedCreateWithoutPenggunaInput> | NotifikasiCreateWithoutPenggunaInput[] | NotifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: NotifikasiCreateOrConnectWithoutPenggunaInput | NotifikasiCreateOrConnectWithoutPenggunaInput[]
    createMany?: NotifikasiCreateManyPenggunaInputEnvelope
    connect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
  }

  export type LogbookUncheckedCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<LogbookCreateWithoutPenggunaInput, LogbookUncheckedCreateWithoutPenggunaInput> | LogbookCreateWithoutPenggunaInput[] | LogbookUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LogbookCreateOrConnectWithoutPenggunaInput | LogbookCreateOrConnectWithoutPenggunaInput[]
    createMany?: LogbookCreateManyPenggunaInputEnvelope
    connect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MahasiswaUpdateOneWithoutPenggunaNestedInput = {
    create?: XOR<MahasiswaCreateWithoutPenggunaInput, MahasiswaUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPenggunaInput
    upsert?: MahasiswaUpsertWithoutPenggunaInput
    disconnect?: MahasiswaWhereInput | boolean
    delete?: MahasiswaWhereInput | boolean
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutPenggunaInput, MahasiswaUpdateWithoutPenggunaInput>, MahasiswaUncheckedUpdateWithoutPenggunaInput>
  }

  export type DosenUpdateOneWithoutPenggunaNestedInput = {
    create?: XOR<DosenCreateWithoutPenggunaInput, DosenUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: DosenCreateOrConnectWithoutPenggunaInput
    upsert?: DosenUpsertWithoutPenggunaInput
    disconnect?: DosenWhereInput | boolean
    delete?: DosenWhereInput | boolean
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutPenggunaInput, DosenUpdateWithoutPenggunaInput>, DosenUncheckedUpdateWithoutPenggunaInput>
  }

  export type NotifikasiUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<NotifikasiCreateWithoutPenggunaInput, NotifikasiUncheckedCreateWithoutPenggunaInput> | NotifikasiCreateWithoutPenggunaInput[] | NotifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: NotifikasiCreateOrConnectWithoutPenggunaInput | NotifikasiCreateOrConnectWithoutPenggunaInput[]
    upsert?: NotifikasiUpsertWithWhereUniqueWithoutPenggunaInput | NotifikasiUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: NotifikasiCreateManyPenggunaInputEnvelope
    set?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    disconnect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    delete?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    connect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    update?: NotifikasiUpdateWithWhereUniqueWithoutPenggunaInput | NotifikasiUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: NotifikasiUpdateManyWithWhereWithoutPenggunaInput | NotifikasiUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: NotifikasiScalarWhereInput | NotifikasiScalarWhereInput[]
  }

  export type LogbookUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<LogbookCreateWithoutPenggunaInput, LogbookUncheckedCreateWithoutPenggunaInput> | LogbookCreateWithoutPenggunaInput[] | LogbookUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LogbookCreateOrConnectWithoutPenggunaInput | LogbookCreateOrConnectWithoutPenggunaInput[]
    upsert?: LogbookUpsertWithWhereUniqueWithoutPenggunaInput | LogbookUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: LogbookCreateManyPenggunaInputEnvelope
    set?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    disconnect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    delete?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    connect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    update?: LogbookUpdateWithWhereUniqueWithoutPenggunaInput | LogbookUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: LogbookUpdateManyWithWhereWithoutPenggunaInput | LogbookUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: LogbookScalarWhereInput | LogbookScalarWhereInput[]
  }

  export type ProgramStudiUpdateOneRequiredWithoutPenggunaNestedInput = {
    create?: XOR<ProgramStudiCreateWithoutPenggunaInput, ProgramStudiUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: ProgramStudiCreateOrConnectWithoutPenggunaInput
    upsert?: ProgramStudiUpsertWithoutPenggunaInput
    connect?: ProgramStudiWhereUniqueInput
    update?: XOR<XOR<ProgramStudiUpdateToOneWithWhereWithoutPenggunaInput, ProgramStudiUpdateWithoutPenggunaInput>, ProgramStudiUncheckedUpdateWithoutPenggunaInput>
  }

  export type MahasiswaUncheckedUpdateOneWithoutPenggunaNestedInput = {
    create?: XOR<MahasiswaCreateWithoutPenggunaInput, MahasiswaUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPenggunaInput
    upsert?: MahasiswaUpsertWithoutPenggunaInput
    disconnect?: MahasiswaWhereInput | boolean
    delete?: MahasiswaWhereInput | boolean
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutPenggunaInput, MahasiswaUpdateWithoutPenggunaInput>, MahasiswaUncheckedUpdateWithoutPenggunaInput>
  }

  export type DosenUncheckedUpdateOneWithoutPenggunaNestedInput = {
    create?: XOR<DosenCreateWithoutPenggunaInput, DosenUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: DosenCreateOrConnectWithoutPenggunaInput
    upsert?: DosenUpsertWithoutPenggunaInput
    disconnect?: DosenWhereInput | boolean
    delete?: DosenWhereInput | boolean
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutPenggunaInput, DosenUpdateWithoutPenggunaInput>, DosenUncheckedUpdateWithoutPenggunaInput>
  }

  export type NotifikasiUncheckedUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<NotifikasiCreateWithoutPenggunaInput, NotifikasiUncheckedCreateWithoutPenggunaInput> | NotifikasiCreateWithoutPenggunaInput[] | NotifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: NotifikasiCreateOrConnectWithoutPenggunaInput | NotifikasiCreateOrConnectWithoutPenggunaInput[]
    upsert?: NotifikasiUpsertWithWhereUniqueWithoutPenggunaInput | NotifikasiUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: NotifikasiCreateManyPenggunaInputEnvelope
    set?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    disconnect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    delete?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    connect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    update?: NotifikasiUpdateWithWhereUniqueWithoutPenggunaInput | NotifikasiUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: NotifikasiUpdateManyWithWhereWithoutPenggunaInput | NotifikasiUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: NotifikasiScalarWhereInput | NotifikasiScalarWhereInput[]
  }

  export type LogbookUncheckedUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<LogbookCreateWithoutPenggunaInput, LogbookUncheckedCreateWithoutPenggunaInput> | LogbookCreateWithoutPenggunaInput[] | LogbookUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LogbookCreateOrConnectWithoutPenggunaInput | LogbookCreateOrConnectWithoutPenggunaInput[]
    upsert?: LogbookUpsertWithWhereUniqueWithoutPenggunaInput | LogbookUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: LogbookCreateManyPenggunaInputEnvelope
    set?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    disconnect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    delete?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    connect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    update?: LogbookUpdateWithWhereUniqueWithoutPenggunaInput | LogbookUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: LogbookUpdateManyWithWhereWithoutPenggunaInput | LogbookUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: LogbookScalarWhereInput | LogbookScalarWhereInput[]
  }

  export type PenggunaCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<PenggunaCreateWithoutMahasiswaInput, PenggunaUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutMahasiswaInput
    connect?: PenggunaWhereUniqueInput
  }

  export type LogbookCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<LogbookCreateWithoutMahasiswaInput, LogbookUncheckedCreateWithoutMahasiswaInput> | LogbookCreateWithoutMahasiswaInput[] | LogbookUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: LogbookCreateOrConnectWithoutMahasiswaInput | LogbookCreateOrConnectWithoutMahasiswaInput[]
    createMany?: LogbookCreateManyMahasiswaInputEnvelope
    connect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
  }

  export type DosenCreateNestedOneWithoutMahasiswaBimbinganInput = {
    create?: XOR<DosenCreateWithoutMahasiswaBimbinganInput, DosenUncheckedCreateWithoutMahasiswaBimbinganInput>
    connectOrCreate?: DosenCreateOrConnectWithoutMahasiswaBimbinganInput
    connect?: DosenWhereUniqueInput
  }

  export type PermohonanBimbinganCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<PermohonanBimbinganCreateWithoutMahasiswaInput, PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput> | PermohonanBimbinganCreateWithoutMahasiswaInput[] | PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PermohonanBimbinganCreateOrConnectWithoutMahasiswaInput | PermohonanBimbinganCreateOrConnectWithoutMahasiswaInput[]
    createMany?: PermohonanBimbinganCreateManyMahasiswaInputEnvelope
    connect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
  }

  export type RiwayatPerubahanPembimbingCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput, RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput> | RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput[] | RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: RiwayatPerubahanPembimbingCreateOrConnectWithoutMahasiswaInput | RiwayatPerubahanPembimbingCreateOrConnectWithoutMahasiswaInput[]
    createMany?: RiwayatPerubahanPembimbingCreateManyMahasiswaInputEnvelope
    connect?: RiwayatPerubahanPembimbingWhereUniqueInput | RiwayatPerubahanPembimbingWhereUniqueInput[]
  }

  export type LogbookUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<LogbookCreateWithoutMahasiswaInput, LogbookUncheckedCreateWithoutMahasiswaInput> | LogbookCreateWithoutMahasiswaInput[] | LogbookUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: LogbookCreateOrConnectWithoutMahasiswaInput | LogbookCreateOrConnectWithoutMahasiswaInput[]
    createMany?: LogbookCreateManyMahasiswaInputEnvelope
    connect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
  }

  export type PermohonanBimbinganUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<PermohonanBimbinganCreateWithoutMahasiswaInput, PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput> | PermohonanBimbinganCreateWithoutMahasiswaInput[] | PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PermohonanBimbinganCreateOrConnectWithoutMahasiswaInput | PermohonanBimbinganCreateOrConnectWithoutMahasiswaInput[]
    createMany?: PermohonanBimbinganCreateManyMahasiswaInputEnvelope
    connect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
  }

  export type RiwayatPerubahanPembimbingUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput, RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput> | RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput[] | RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: RiwayatPerubahanPembimbingCreateOrConnectWithoutMahasiswaInput | RiwayatPerubahanPembimbingCreateOrConnectWithoutMahasiswaInput[]
    createMany?: RiwayatPerubahanPembimbingCreateManyMahasiswaInputEnvelope
    connect?: RiwayatPerubahanPembimbingWhereUniqueInput | RiwayatPerubahanPembimbingWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PenggunaUpdateOneRequiredWithoutMahasiswaNestedInput = {
    create?: XOR<PenggunaCreateWithoutMahasiswaInput, PenggunaUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutMahasiswaInput
    upsert?: PenggunaUpsertWithoutMahasiswaInput
    connect?: PenggunaWhereUniqueInput
    update?: XOR<XOR<PenggunaUpdateToOneWithWhereWithoutMahasiswaInput, PenggunaUpdateWithoutMahasiswaInput>, PenggunaUncheckedUpdateWithoutMahasiswaInput>
  }

  export type LogbookUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<LogbookCreateWithoutMahasiswaInput, LogbookUncheckedCreateWithoutMahasiswaInput> | LogbookCreateWithoutMahasiswaInput[] | LogbookUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: LogbookCreateOrConnectWithoutMahasiswaInput | LogbookCreateOrConnectWithoutMahasiswaInput[]
    upsert?: LogbookUpsertWithWhereUniqueWithoutMahasiswaInput | LogbookUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: LogbookCreateManyMahasiswaInputEnvelope
    set?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    disconnect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    delete?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    connect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    update?: LogbookUpdateWithWhereUniqueWithoutMahasiswaInput | LogbookUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: LogbookUpdateManyWithWhereWithoutMahasiswaInput | LogbookUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: LogbookScalarWhereInput | LogbookScalarWhereInput[]
  }

  export type DosenUpdateOneWithoutMahasiswaBimbinganNestedInput = {
    create?: XOR<DosenCreateWithoutMahasiswaBimbinganInput, DosenUncheckedCreateWithoutMahasiswaBimbinganInput>
    connectOrCreate?: DosenCreateOrConnectWithoutMahasiswaBimbinganInput
    upsert?: DosenUpsertWithoutMahasiswaBimbinganInput
    disconnect?: DosenWhereInput | boolean
    delete?: DosenWhereInput | boolean
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutMahasiswaBimbinganInput, DosenUpdateWithoutMahasiswaBimbinganInput>, DosenUncheckedUpdateWithoutMahasiswaBimbinganInput>
  }

  export type PermohonanBimbinganUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<PermohonanBimbinganCreateWithoutMahasiswaInput, PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput> | PermohonanBimbinganCreateWithoutMahasiswaInput[] | PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PermohonanBimbinganCreateOrConnectWithoutMahasiswaInput | PermohonanBimbinganCreateOrConnectWithoutMahasiswaInput[]
    upsert?: PermohonanBimbinganUpsertWithWhereUniqueWithoutMahasiswaInput | PermohonanBimbinganUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: PermohonanBimbinganCreateManyMahasiswaInputEnvelope
    set?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    disconnect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    delete?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    connect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    update?: PermohonanBimbinganUpdateWithWhereUniqueWithoutMahasiswaInput | PermohonanBimbinganUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: PermohonanBimbinganUpdateManyWithWhereWithoutMahasiswaInput | PermohonanBimbinganUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: PermohonanBimbinganScalarWhereInput | PermohonanBimbinganScalarWhereInput[]
  }

  export type RiwayatPerubahanPembimbingUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput, RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput> | RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput[] | RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: RiwayatPerubahanPembimbingCreateOrConnectWithoutMahasiswaInput | RiwayatPerubahanPembimbingCreateOrConnectWithoutMahasiswaInput[]
    upsert?: RiwayatPerubahanPembimbingUpsertWithWhereUniqueWithoutMahasiswaInput | RiwayatPerubahanPembimbingUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: RiwayatPerubahanPembimbingCreateManyMahasiswaInputEnvelope
    set?: RiwayatPerubahanPembimbingWhereUniqueInput | RiwayatPerubahanPembimbingWhereUniqueInput[]
    disconnect?: RiwayatPerubahanPembimbingWhereUniqueInput | RiwayatPerubahanPembimbingWhereUniqueInput[]
    delete?: RiwayatPerubahanPembimbingWhereUniqueInput | RiwayatPerubahanPembimbingWhereUniqueInput[]
    connect?: RiwayatPerubahanPembimbingWhereUniqueInput | RiwayatPerubahanPembimbingWhereUniqueInput[]
    update?: RiwayatPerubahanPembimbingUpdateWithWhereUniqueWithoutMahasiswaInput | RiwayatPerubahanPembimbingUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: RiwayatPerubahanPembimbingUpdateManyWithWhereWithoutMahasiswaInput | RiwayatPerubahanPembimbingUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: RiwayatPerubahanPembimbingScalarWhereInput | RiwayatPerubahanPembimbingScalarWhereInput[]
  }

  export type LogbookUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<LogbookCreateWithoutMahasiswaInput, LogbookUncheckedCreateWithoutMahasiswaInput> | LogbookCreateWithoutMahasiswaInput[] | LogbookUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: LogbookCreateOrConnectWithoutMahasiswaInput | LogbookCreateOrConnectWithoutMahasiswaInput[]
    upsert?: LogbookUpsertWithWhereUniqueWithoutMahasiswaInput | LogbookUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: LogbookCreateManyMahasiswaInputEnvelope
    set?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    disconnect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    delete?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    connect?: LogbookWhereUniqueInput | LogbookWhereUniqueInput[]
    update?: LogbookUpdateWithWhereUniqueWithoutMahasiswaInput | LogbookUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: LogbookUpdateManyWithWhereWithoutMahasiswaInput | LogbookUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: LogbookScalarWhereInput | LogbookScalarWhereInput[]
  }

  export type PermohonanBimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<PermohonanBimbinganCreateWithoutMahasiswaInput, PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput> | PermohonanBimbinganCreateWithoutMahasiswaInput[] | PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PermohonanBimbinganCreateOrConnectWithoutMahasiswaInput | PermohonanBimbinganCreateOrConnectWithoutMahasiswaInput[]
    upsert?: PermohonanBimbinganUpsertWithWhereUniqueWithoutMahasiswaInput | PermohonanBimbinganUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: PermohonanBimbinganCreateManyMahasiswaInputEnvelope
    set?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    disconnect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    delete?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    connect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    update?: PermohonanBimbinganUpdateWithWhereUniqueWithoutMahasiswaInput | PermohonanBimbinganUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: PermohonanBimbinganUpdateManyWithWhereWithoutMahasiswaInput | PermohonanBimbinganUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: PermohonanBimbinganScalarWhereInput | PermohonanBimbinganScalarWhereInput[]
  }

  export type RiwayatPerubahanPembimbingUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput, RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput> | RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput[] | RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: RiwayatPerubahanPembimbingCreateOrConnectWithoutMahasiswaInput | RiwayatPerubahanPembimbingCreateOrConnectWithoutMahasiswaInput[]
    upsert?: RiwayatPerubahanPembimbingUpsertWithWhereUniqueWithoutMahasiswaInput | RiwayatPerubahanPembimbingUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: RiwayatPerubahanPembimbingCreateManyMahasiswaInputEnvelope
    set?: RiwayatPerubahanPembimbingWhereUniqueInput | RiwayatPerubahanPembimbingWhereUniqueInput[]
    disconnect?: RiwayatPerubahanPembimbingWhereUniqueInput | RiwayatPerubahanPembimbingWhereUniqueInput[]
    delete?: RiwayatPerubahanPembimbingWhereUniqueInput | RiwayatPerubahanPembimbingWhereUniqueInput[]
    connect?: RiwayatPerubahanPembimbingWhereUniqueInput | RiwayatPerubahanPembimbingWhereUniqueInput[]
    update?: RiwayatPerubahanPembimbingUpdateWithWhereUniqueWithoutMahasiswaInput | RiwayatPerubahanPembimbingUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: RiwayatPerubahanPembimbingUpdateManyWithWhereWithoutMahasiswaInput | RiwayatPerubahanPembimbingUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: RiwayatPerubahanPembimbingScalarWhereInput | RiwayatPerubahanPembimbingScalarWhereInput[]
  }

  export type PenggunaCreateNestedOneWithoutDosenInput = {
    create?: XOR<PenggunaCreateWithoutDosenInput, PenggunaUncheckedCreateWithoutDosenInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutDosenInput
    connect?: PenggunaWhereUniqueInput
  }

  export type MahasiswaCreateNestedManyWithoutPembimbingInput = {
    create?: XOR<MahasiswaCreateWithoutPembimbingInput, MahasiswaUncheckedCreateWithoutPembimbingInput> | MahasiswaCreateWithoutPembimbingInput[] | MahasiswaUncheckedCreateWithoutPembimbingInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPembimbingInput | MahasiswaCreateOrConnectWithoutPembimbingInput[]
    createMany?: MahasiswaCreateManyPembimbingInputEnvelope
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
  }

  export type PermohonanBimbinganCreateNestedManyWithoutDosenInput = {
    create?: XOR<PermohonanBimbinganCreateWithoutDosenInput, PermohonanBimbinganUncheckedCreateWithoutDosenInput> | PermohonanBimbinganCreateWithoutDosenInput[] | PermohonanBimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PermohonanBimbinganCreateOrConnectWithoutDosenInput | PermohonanBimbinganCreateOrConnectWithoutDosenInput[]
    createMany?: PermohonanBimbinganCreateManyDosenInputEnvelope
    connect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
  }

  export type MahasiswaUncheckedCreateNestedManyWithoutPembimbingInput = {
    create?: XOR<MahasiswaCreateWithoutPembimbingInput, MahasiswaUncheckedCreateWithoutPembimbingInput> | MahasiswaCreateWithoutPembimbingInput[] | MahasiswaUncheckedCreateWithoutPembimbingInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPembimbingInput | MahasiswaCreateOrConnectWithoutPembimbingInput[]
    createMany?: MahasiswaCreateManyPembimbingInputEnvelope
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
  }

  export type PermohonanBimbinganUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<PermohonanBimbinganCreateWithoutDosenInput, PermohonanBimbinganUncheckedCreateWithoutDosenInput> | PermohonanBimbinganCreateWithoutDosenInput[] | PermohonanBimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PermohonanBimbinganCreateOrConnectWithoutDosenInput | PermohonanBimbinganCreateOrConnectWithoutDosenInput[]
    createMany?: PermohonanBimbinganCreateManyDosenInputEnvelope
    connect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
  }

  export type PenggunaUpdateOneRequiredWithoutDosenNestedInput = {
    create?: XOR<PenggunaCreateWithoutDosenInput, PenggunaUncheckedCreateWithoutDosenInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutDosenInput
    upsert?: PenggunaUpsertWithoutDosenInput
    connect?: PenggunaWhereUniqueInput
    update?: XOR<XOR<PenggunaUpdateToOneWithWhereWithoutDosenInput, PenggunaUpdateWithoutDosenInput>, PenggunaUncheckedUpdateWithoutDosenInput>
  }

  export type MahasiswaUpdateManyWithoutPembimbingNestedInput = {
    create?: XOR<MahasiswaCreateWithoutPembimbingInput, MahasiswaUncheckedCreateWithoutPembimbingInput> | MahasiswaCreateWithoutPembimbingInput[] | MahasiswaUncheckedCreateWithoutPembimbingInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPembimbingInput | MahasiswaCreateOrConnectWithoutPembimbingInput[]
    upsert?: MahasiswaUpsertWithWhereUniqueWithoutPembimbingInput | MahasiswaUpsertWithWhereUniqueWithoutPembimbingInput[]
    createMany?: MahasiswaCreateManyPembimbingInputEnvelope
    set?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    disconnect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    delete?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    update?: MahasiswaUpdateWithWhereUniqueWithoutPembimbingInput | MahasiswaUpdateWithWhereUniqueWithoutPembimbingInput[]
    updateMany?: MahasiswaUpdateManyWithWhereWithoutPembimbingInput | MahasiswaUpdateManyWithWhereWithoutPembimbingInput[]
    deleteMany?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
  }

  export type PermohonanBimbinganUpdateManyWithoutDosenNestedInput = {
    create?: XOR<PermohonanBimbinganCreateWithoutDosenInput, PermohonanBimbinganUncheckedCreateWithoutDosenInput> | PermohonanBimbinganCreateWithoutDosenInput[] | PermohonanBimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PermohonanBimbinganCreateOrConnectWithoutDosenInput | PermohonanBimbinganCreateOrConnectWithoutDosenInput[]
    upsert?: PermohonanBimbinganUpsertWithWhereUniqueWithoutDosenInput | PermohonanBimbinganUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: PermohonanBimbinganCreateManyDosenInputEnvelope
    set?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    disconnect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    delete?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    connect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    update?: PermohonanBimbinganUpdateWithWhereUniqueWithoutDosenInput | PermohonanBimbinganUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: PermohonanBimbinganUpdateManyWithWhereWithoutDosenInput | PermohonanBimbinganUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: PermohonanBimbinganScalarWhereInput | PermohonanBimbinganScalarWhereInput[]
  }

  export type MahasiswaUncheckedUpdateManyWithoutPembimbingNestedInput = {
    create?: XOR<MahasiswaCreateWithoutPembimbingInput, MahasiswaUncheckedCreateWithoutPembimbingInput> | MahasiswaCreateWithoutPembimbingInput[] | MahasiswaUncheckedCreateWithoutPembimbingInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPembimbingInput | MahasiswaCreateOrConnectWithoutPembimbingInput[]
    upsert?: MahasiswaUpsertWithWhereUniqueWithoutPembimbingInput | MahasiswaUpsertWithWhereUniqueWithoutPembimbingInput[]
    createMany?: MahasiswaCreateManyPembimbingInputEnvelope
    set?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    disconnect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    delete?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    update?: MahasiswaUpdateWithWhereUniqueWithoutPembimbingInput | MahasiswaUpdateWithWhereUniqueWithoutPembimbingInput[]
    updateMany?: MahasiswaUpdateManyWithWhereWithoutPembimbingInput | MahasiswaUpdateManyWithWhereWithoutPembimbingInput[]
    deleteMany?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
  }

  export type PermohonanBimbinganUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<PermohonanBimbinganCreateWithoutDosenInput, PermohonanBimbinganUncheckedCreateWithoutDosenInput> | PermohonanBimbinganCreateWithoutDosenInput[] | PermohonanBimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PermohonanBimbinganCreateOrConnectWithoutDosenInput | PermohonanBimbinganCreateOrConnectWithoutDosenInput[]
    upsert?: PermohonanBimbinganUpsertWithWhereUniqueWithoutDosenInput | PermohonanBimbinganUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: PermohonanBimbinganCreateManyDosenInputEnvelope
    set?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    disconnect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    delete?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    connect?: PermohonanBimbinganWhereUniqueInput | PermohonanBimbinganWhereUniqueInput[]
    update?: PermohonanBimbinganUpdateWithWhereUniqueWithoutDosenInput | PermohonanBimbinganUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: PermohonanBimbinganUpdateManyWithWhereWithoutDosenInput | PermohonanBimbinganUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: PermohonanBimbinganScalarWhereInput | PermohonanBimbinganScalarWhereInput[]
  }

  export type MahasiswaCreateNestedOneWithoutLogbookInput = {
    create?: XOR<MahasiswaCreateWithoutLogbookInput, MahasiswaUncheckedCreateWithoutLogbookInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutLogbookInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type KegiatanCreateNestedManyWithoutLogbookInput = {
    create?: XOR<KegiatanCreateWithoutLogbookInput, KegiatanUncheckedCreateWithoutLogbookInput> | KegiatanCreateWithoutLogbookInput[] | KegiatanUncheckedCreateWithoutLogbookInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutLogbookInput | KegiatanCreateOrConnectWithoutLogbookInput[]
    createMany?: KegiatanCreateManyLogbookInputEnvelope
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
  }

  export type PenggunaCreateNestedOneWithoutLogbookInput = {
    create?: XOR<PenggunaCreateWithoutLogbookInput, PenggunaUncheckedCreateWithoutLogbookInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutLogbookInput
    connect?: PenggunaWhereUniqueInput
  }

  export type KegiatanUncheckedCreateNestedManyWithoutLogbookInput = {
    create?: XOR<KegiatanCreateWithoutLogbookInput, KegiatanUncheckedCreateWithoutLogbookInput> | KegiatanCreateWithoutLogbookInput[] | KegiatanUncheckedCreateWithoutLogbookInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutLogbookInput | KegiatanCreateOrConnectWithoutLogbookInput[]
    createMany?: KegiatanCreateManyLogbookInputEnvelope
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
  }

  export type MahasiswaUpdateOneRequiredWithoutLogbookNestedInput = {
    create?: XOR<MahasiswaCreateWithoutLogbookInput, MahasiswaUncheckedCreateWithoutLogbookInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutLogbookInput
    upsert?: MahasiswaUpsertWithoutLogbookInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutLogbookInput, MahasiswaUpdateWithoutLogbookInput>, MahasiswaUncheckedUpdateWithoutLogbookInput>
  }

  export type KegiatanUpdateManyWithoutLogbookNestedInput = {
    create?: XOR<KegiatanCreateWithoutLogbookInput, KegiatanUncheckedCreateWithoutLogbookInput> | KegiatanCreateWithoutLogbookInput[] | KegiatanUncheckedCreateWithoutLogbookInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutLogbookInput | KegiatanCreateOrConnectWithoutLogbookInput[]
    upsert?: KegiatanUpsertWithWhereUniqueWithoutLogbookInput | KegiatanUpsertWithWhereUniqueWithoutLogbookInput[]
    createMany?: KegiatanCreateManyLogbookInputEnvelope
    set?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    disconnect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    delete?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    update?: KegiatanUpdateWithWhereUniqueWithoutLogbookInput | KegiatanUpdateWithWhereUniqueWithoutLogbookInput[]
    updateMany?: KegiatanUpdateManyWithWhereWithoutLogbookInput | KegiatanUpdateManyWithWhereWithoutLogbookInput[]
    deleteMany?: KegiatanScalarWhereInput | KegiatanScalarWhereInput[]
  }

  export type PenggunaUpdateOneWithoutLogbookNestedInput = {
    create?: XOR<PenggunaCreateWithoutLogbookInput, PenggunaUncheckedCreateWithoutLogbookInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutLogbookInput
    upsert?: PenggunaUpsertWithoutLogbookInput
    disconnect?: PenggunaWhereInput | boolean
    delete?: PenggunaWhereInput | boolean
    connect?: PenggunaWhereUniqueInput
    update?: XOR<XOR<PenggunaUpdateToOneWithWhereWithoutLogbookInput, PenggunaUpdateWithoutLogbookInput>, PenggunaUncheckedUpdateWithoutLogbookInput>
  }

  export type KegiatanUncheckedUpdateManyWithoutLogbookNestedInput = {
    create?: XOR<KegiatanCreateWithoutLogbookInput, KegiatanUncheckedCreateWithoutLogbookInput> | KegiatanCreateWithoutLogbookInput[] | KegiatanUncheckedCreateWithoutLogbookInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutLogbookInput | KegiatanCreateOrConnectWithoutLogbookInput[]
    upsert?: KegiatanUpsertWithWhereUniqueWithoutLogbookInput | KegiatanUpsertWithWhereUniqueWithoutLogbookInput[]
    createMany?: KegiatanCreateManyLogbookInputEnvelope
    set?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    disconnect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    delete?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    update?: KegiatanUpdateWithWhereUniqueWithoutLogbookInput | KegiatanUpdateWithWhereUniqueWithoutLogbookInput[]
    updateMany?: KegiatanUpdateManyWithWhereWithoutLogbookInput | KegiatanUpdateManyWithWhereWithoutLogbookInput[]
    deleteMany?: KegiatanScalarWhereInput | KegiatanScalarWhereInput[]
  }

  export type MahasiswaCreateNestedOneWithoutRiwayatPerubahanPembimbingInput = {
    create?: XOR<MahasiswaCreateWithoutRiwayatPerubahanPembimbingInput, MahasiswaUncheckedCreateWithoutRiwayatPerubahanPembimbingInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutRiwayatPerubahanPembimbingInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutRiwayatPerubahanPembimbingNestedInput = {
    create?: XOR<MahasiswaCreateWithoutRiwayatPerubahanPembimbingInput, MahasiswaUncheckedCreateWithoutRiwayatPerubahanPembimbingInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutRiwayatPerubahanPembimbingInput
    upsert?: MahasiswaUpsertWithoutRiwayatPerubahanPembimbingInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutRiwayatPerubahanPembimbingInput, MahasiswaUpdateWithoutRiwayatPerubahanPembimbingInput>, MahasiswaUncheckedUpdateWithoutRiwayatPerubahanPembimbingInput>
  }

  export type LogbookCreateNestedOneWithoutKegiatanInput = {
    create?: XOR<LogbookCreateWithoutKegiatanInput, LogbookUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: LogbookCreateOrConnectWithoutKegiatanInput
    connect?: LogbookWhereUniqueInput
  }

  export type MataKuliahCreateNestedOneWithoutKegiatanInput = {
    create?: XOR<MataKuliahCreateWithoutKegiatanInput, MataKuliahUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: MataKuliahCreateOrConnectWithoutKegiatanInput
    connect?: MataKuliahWhereUniqueInput
  }

  export type LampiranCreateNestedManyWithoutKegiatanInput = {
    create?: XOR<LampiranCreateWithoutKegiatanInput, LampiranUncheckedCreateWithoutKegiatanInput> | LampiranCreateWithoutKegiatanInput[] | LampiranUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: LampiranCreateOrConnectWithoutKegiatanInput | LampiranCreateOrConnectWithoutKegiatanInput[]
    createMany?: LampiranCreateManyKegiatanInputEnvelope
    connect?: LampiranWhereUniqueInput | LampiranWhereUniqueInput[]
  }

  export type LampiranUncheckedCreateNestedManyWithoutKegiatanInput = {
    create?: XOR<LampiranCreateWithoutKegiatanInput, LampiranUncheckedCreateWithoutKegiatanInput> | LampiranCreateWithoutKegiatanInput[] | LampiranUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: LampiranCreateOrConnectWithoutKegiatanInput | LampiranCreateOrConnectWithoutKegiatanInput[]
    createMany?: LampiranCreateManyKegiatanInputEnvelope
    connect?: LampiranWhereUniqueInput | LampiranWhereUniqueInput[]
  }

  export type LogbookUpdateOneRequiredWithoutKegiatanNestedInput = {
    create?: XOR<LogbookCreateWithoutKegiatanInput, LogbookUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: LogbookCreateOrConnectWithoutKegiatanInput
    upsert?: LogbookUpsertWithoutKegiatanInput
    connect?: LogbookWhereUniqueInput
    update?: XOR<XOR<LogbookUpdateToOneWithWhereWithoutKegiatanInput, LogbookUpdateWithoutKegiatanInput>, LogbookUncheckedUpdateWithoutKegiatanInput>
  }

  export type MataKuliahUpdateOneRequiredWithoutKegiatanNestedInput = {
    create?: XOR<MataKuliahCreateWithoutKegiatanInput, MataKuliahUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: MataKuliahCreateOrConnectWithoutKegiatanInput
    upsert?: MataKuliahUpsertWithoutKegiatanInput
    connect?: MataKuliahWhereUniqueInput
    update?: XOR<XOR<MataKuliahUpdateToOneWithWhereWithoutKegiatanInput, MataKuliahUpdateWithoutKegiatanInput>, MataKuliahUncheckedUpdateWithoutKegiatanInput>
  }

  export type LampiranUpdateManyWithoutKegiatanNestedInput = {
    create?: XOR<LampiranCreateWithoutKegiatanInput, LampiranUncheckedCreateWithoutKegiatanInput> | LampiranCreateWithoutKegiatanInput[] | LampiranUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: LampiranCreateOrConnectWithoutKegiatanInput | LampiranCreateOrConnectWithoutKegiatanInput[]
    upsert?: LampiranUpsertWithWhereUniqueWithoutKegiatanInput | LampiranUpsertWithWhereUniqueWithoutKegiatanInput[]
    createMany?: LampiranCreateManyKegiatanInputEnvelope
    set?: LampiranWhereUniqueInput | LampiranWhereUniqueInput[]
    disconnect?: LampiranWhereUniqueInput | LampiranWhereUniqueInput[]
    delete?: LampiranWhereUniqueInput | LampiranWhereUniqueInput[]
    connect?: LampiranWhereUniqueInput | LampiranWhereUniqueInput[]
    update?: LampiranUpdateWithWhereUniqueWithoutKegiatanInput | LampiranUpdateWithWhereUniqueWithoutKegiatanInput[]
    updateMany?: LampiranUpdateManyWithWhereWithoutKegiatanInput | LampiranUpdateManyWithWhereWithoutKegiatanInput[]
    deleteMany?: LampiranScalarWhereInput | LampiranScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LampiranUncheckedUpdateManyWithoutKegiatanNestedInput = {
    create?: XOR<LampiranCreateWithoutKegiatanInput, LampiranUncheckedCreateWithoutKegiatanInput> | LampiranCreateWithoutKegiatanInput[] | LampiranUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: LampiranCreateOrConnectWithoutKegiatanInput | LampiranCreateOrConnectWithoutKegiatanInput[]
    upsert?: LampiranUpsertWithWhereUniqueWithoutKegiatanInput | LampiranUpsertWithWhereUniqueWithoutKegiatanInput[]
    createMany?: LampiranCreateManyKegiatanInputEnvelope
    set?: LampiranWhereUniqueInput | LampiranWhereUniqueInput[]
    disconnect?: LampiranWhereUniqueInput | LampiranWhereUniqueInput[]
    delete?: LampiranWhereUniqueInput | LampiranWhereUniqueInput[]
    connect?: LampiranWhereUniqueInput | LampiranWhereUniqueInput[]
    update?: LampiranUpdateWithWhereUniqueWithoutKegiatanInput | LampiranUpdateWithWhereUniqueWithoutKegiatanInput[]
    updateMany?: LampiranUpdateManyWithWhereWithoutKegiatanInput | LampiranUpdateManyWithWhereWithoutKegiatanInput[]
    deleteMany?: LampiranScalarWhereInput | LampiranScalarWhereInput[]
  }

  export type KegiatanCreateNestedManyWithoutMataKuliahInput = {
    create?: XOR<KegiatanCreateWithoutMataKuliahInput, KegiatanUncheckedCreateWithoutMataKuliahInput> | KegiatanCreateWithoutMataKuliahInput[] | KegiatanUncheckedCreateWithoutMataKuliahInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutMataKuliahInput | KegiatanCreateOrConnectWithoutMataKuliahInput[]
    createMany?: KegiatanCreateManyMataKuliahInputEnvelope
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
  }

  export type ProgramStudiCreateNestedOneWithoutMataKuliahInput = {
    create?: XOR<ProgramStudiCreateWithoutMataKuliahInput, ProgramStudiUncheckedCreateWithoutMataKuliahInput>
    connectOrCreate?: ProgramStudiCreateOrConnectWithoutMataKuliahInput
    connect?: ProgramStudiWhereUniqueInput
  }

  export type KegiatanUncheckedCreateNestedManyWithoutMataKuliahInput = {
    create?: XOR<KegiatanCreateWithoutMataKuliahInput, KegiatanUncheckedCreateWithoutMataKuliahInput> | KegiatanCreateWithoutMataKuliahInput[] | KegiatanUncheckedCreateWithoutMataKuliahInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutMataKuliahInput | KegiatanCreateOrConnectWithoutMataKuliahInput[]
    createMany?: KegiatanCreateManyMataKuliahInputEnvelope
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
  }

  export type KegiatanUpdateManyWithoutMataKuliahNestedInput = {
    create?: XOR<KegiatanCreateWithoutMataKuliahInput, KegiatanUncheckedCreateWithoutMataKuliahInput> | KegiatanCreateWithoutMataKuliahInput[] | KegiatanUncheckedCreateWithoutMataKuliahInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutMataKuliahInput | KegiatanCreateOrConnectWithoutMataKuliahInput[]
    upsert?: KegiatanUpsertWithWhereUniqueWithoutMataKuliahInput | KegiatanUpsertWithWhereUniqueWithoutMataKuliahInput[]
    createMany?: KegiatanCreateManyMataKuliahInputEnvelope
    set?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    disconnect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    delete?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    update?: KegiatanUpdateWithWhereUniqueWithoutMataKuliahInput | KegiatanUpdateWithWhereUniqueWithoutMataKuliahInput[]
    updateMany?: KegiatanUpdateManyWithWhereWithoutMataKuliahInput | KegiatanUpdateManyWithWhereWithoutMataKuliahInput[]
    deleteMany?: KegiatanScalarWhereInput | KegiatanScalarWhereInput[]
  }

  export type ProgramStudiUpdateOneWithoutMataKuliahNestedInput = {
    create?: XOR<ProgramStudiCreateWithoutMataKuliahInput, ProgramStudiUncheckedCreateWithoutMataKuliahInput>
    connectOrCreate?: ProgramStudiCreateOrConnectWithoutMataKuliahInput
    upsert?: ProgramStudiUpsertWithoutMataKuliahInput
    disconnect?: ProgramStudiWhereInput | boolean
    delete?: ProgramStudiWhereInput | boolean
    connect?: ProgramStudiWhereUniqueInput
    update?: XOR<XOR<ProgramStudiUpdateToOneWithWhereWithoutMataKuliahInput, ProgramStudiUpdateWithoutMataKuliahInput>, ProgramStudiUncheckedUpdateWithoutMataKuliahInput>
  }

  export type KegiatanUncheckedUpdateManyWithoutMataKuliahNestedInput = {
    create?: XOR<KegiatanCreateWithoutMataKuliahInput, KegiatanUncheckedCreateWithoutMataKuliahInput> | KegiatanCreateWithoutMataKuliahInput[] | KegiatanUncheckedCreateWithoutMataKuliahInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutMataKuliahInput | KegiatanCreateOrConnectWithoutMataKuliahInput[]
    upsert?: KegiatanUpsertWithWhereUniqueWithoutMataKuliahInput | KegiatanUpsertWithWhereUniqueWithoutMataKuliahInput[]
    createMany?: KegiatanCreateManyMataKuliahInputEnvelope
    set?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    disconnect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    delete?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    update?: KegiatanUpdateWithWhereUniqueWithoutMataKuliahInput | KegiatanUpdateWithWhereUniqueWithoutMataKuliahInput[]
    updateMany?: KegiatanUpdateManyWithWhereWithoutMataKuliahInput | KegiatanUpdateManyWithWhereWithoutMataKuliahInput[]
    deleteMany?: KegiatanScalarWhereInput | KegiatanScalarWhereInput[]
  }

  export type KegiatanCreateNestedOneWithoutLampiranInput = {
    create?: XOR<KegiatanCreateWithoutLampiranInput, KegiatanUncheckedCreateWithoutLampiranInput>
    connectOrCreate?: KegiatanCreateOrConnectWithoutLampiranInput
    connect?: KegiatanWhereUniqueInput
  }

  export type KegiatanUpdateOneRequiredWithoutLampiranNestedInput = {
    create?: XOR<KegiatanCreateWithoutLampiranInput, KegiatanUncheckedCreateWithoutLampiranInput>
    connectOrCreate?: KegiatanCreateOrConnectWithoutLampiranInput
    upsert?: KegiatanUpsertWithoutLampiranInput
    connect?: KegiatanWhereUniqueInput
    update?: XOR<XOR<KegiatanUpdateToOneWithWhereWithoutLampiranInput, KegiatanUpdateWithoutLampiranInput>, KegiatanUncheckedUpdateWithoutLampiranInput>
  }

  export type MahasiswaCreateNestedOneWithoutPermohonanBimbinganInput = {
    create?: XOR<MahasiswaCreateWithoutPermohonanBimbinganInput, MahasiswaUncheckedCreateWithoutPermohonanBimbinganInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPermohonanBimbinganInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type DosenCreateNestedOneWithoutPermohonanBimbinganInput = {
    create?: XOR<DosenCreateWithoutPermohonanBimbinganInput, DosenUncheckedCreateWithoutPermohonanBimbinganInput>
    connectOrCreate?: DosenCreateOrConnectWithoutPermohonanBimbinganInput
    connect?: DosenWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutPermohonanBimbinganNestedInput = {
    create?: XOR<MahasiswaCreateWithoutPermohonanBimbinganInput, MahasiswaUncheckedCreateWithoutPermohonanBimbinganInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPermohonanBimbinganInput
    upsert?: MahasiswaUpsertWithoutPermohonanBimbinganInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutPermohonanBimbinganInput, MahasiswaUpdateWithoutPermohonanBimbinganInput>, MahasiswaUncheckedUpdateWithoutPermohonanBimbinganInput>
  }

  export type DosenUpdateOneRequiredWithoutPermohonanBimbinganNestedInput = {
    create?: XOR<DosenCreateWithoutPermohonanBimbinganInput, DosenUncheckedCreateWithoutPermohonanBimbinganInput>
    connectOrCreate?: DosenCreateOrConnectWithoutPermohonanBimbinganInput
    upsert?: DosenUpsertWithoutPermohonanBimbinganInput
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutPermohonanBimbinganInput, DosenUpdateWithoutPermohonanBimbinganInput>, DosenUncheckedUpdateWithoutPermohonanBimbinganInput>
  }

  export type PenggunaCreateNestedOneWithoutNotifikasiInput = {
    create?: XOR<PenggunaCreateWithoutNotifikasiInput, PenggunaUncheckedCreateWithoutNotifikasiInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutNotifikasiInput
    connect?: PenggunaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PenggunaUpdateOneRequiredWithoutNotifikasiNestedInput = {
    create?: XOR<PenggunaCreateWithoutNotifikasiInput, PenggunaUncheckedCreateWithoutNotifikasiInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutNotifikasiInput
    upsert?: PenggunaUpsertWithoutNotifikasiInput
    connect?: PenggunaWhereUniqueInput
    update?: XOR<XOR<PenggunaUpdateToOneWithWhereWithoutNotifikasiInput, PenggunaUpdateWithoutNotifikasiInput>, PenggunaUncheckedUpdateWithoutNotifikasiInput>
  }

  export type PenggunaCreateNestedManyWithoutProgramStudiInput = {
    create?: XOR<PenggunaCreateWithoutProgramStudiInput, PenggunaUncheckedCreateWithoutProgramStudiInput> | PenggunaCreateWithoutProgramStudiInput[] | PenggunaUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: PenggunaCreateOrConnectWithoutProgramStudiInput | PenggunaCreateOrConnectWithoutProgramStudiInput[]
    createMany?: PenggunaCreateManyProgramStudiInputEnvelope
    connect?: PenggunaWhereUniqueInput | PenggunaWhereUniqueInput[]
  }

  export type ProgramStudiFieldCreateNestedManyWithoutProgramStudiInput = {
    create?: XOR<ProgramStudiFieldCreateWithoutProgramStudiInput, ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput> | ProgramStudiFieldCreateWithoutProgramStudiInput[] | ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: ProgramStudiFieldCreateOrConnectWithoutProgramStudiInput | ProgramStudiFieldCreateOrConnectWithoutProgramStudiInput[]
    createMany?: ProgramStudiFieldCreateManyProgramStudiInputEnvelope
    connect?: ProgramStudiFieldWhereUniqueInput | ProgramStudiFieldWhereUniqueInput[]
  }

  export type MataKuliahCreateNestedManyWithoutProgramStudiInput = {
    create?: XOR<MataKuliahCreateWithoutProgramStudiInput, MataKuliahUncheckedCreateWithoutProgramStudiInput> | MataKuliahCreateWithoutProgramStudiInput[] | MataKuliahUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: MataKuliahCreateOrConnectWithoutProgramStudiInput | MataKuliahCreateOrConnectWithoutProgramStudiInput[]
    createMany?: MataKuliahCreateManyProgramStudiInputEnvelope
    connect?: MataKuliahWhereUniqueInput | MataKuliahWhereUniqueInput[]
  }

  export type PenggunaUncheckedCreateNestedManyWithoutProgramStudiInput = {
    create?: XOR<PenggunaCreateWithoutProgramStudiInput, PenggunaUncheckedCreateWithoutProgramStudiInput> | PenggunaCreateWithoutProgramStudiInput[] | PenggunaUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: PenggunaCreateOrConnectWithoutProgramStudiInput | PenggunaCreateOrConnectWithoutProgramStudiInput[]
    createMany?: PenggunaCreateManyProgramStudiInputEnvelope
    connect?: PenggunaWhereUniqueInput | PenggunaWhereUniqueInput[]
  }

  export type ProgramStudiFieldUncheckedCreateNestedManyWithoutProgramStudiInput = {
    create?: XOR<ProgramStudiFieldCreateWithoutProgramStudiInput, ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput> | ProgramStudiFieldCreateWithoutProgramStudiInput[] | ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: ProgramStudiFieldCreateOrConnectWithoutProgramStudiInput | ProgramStudiFieldCreateOrConnectWithoutProgramStudiInput[]
    createMany?: ProgramStudiFieldCreateManyProgramStudiInputEnvelope
    connect?: ProgramStudiFieldWhereUniqueInput | ProgramStudiFieldWhereUniqueInput[]
  }

  export type MataKuliahUncheckedCreateNestedManyWithoutProgramStudiInput = {
    create?: XOR<MataKuliahCreateWithoutProgramStudiInput, MataKuliahUncheckedCreateWithoutProgramStudiInput> | MataKuliahCreateWithoutProgramStudiInput[] | MataKuliahUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: MataKuliahCreateOrConnectWithoutProgramStudiInput | MataKuliahCreateOrConnectWithoutProgramStudiInput[]
    createMany?: MataKuliahCreateManyProgramStudiInputEnvelope
    connect?: MataKuliahWhereUniqueInput | MataKuliahWhereUniqueInput[]
  }

  export type PenggunaUpdateManyWithoutProgramStudiNestedInput = {
    create?: XOR<PenggunaCreateWithoutProgramStudiInput, PenggunaUncheckedCreateWithoutProgramStudiInput> | PenggunaCreateWithoutProgramStudiInput[] | PenggunaUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: PenggunaCreateOrConnectWithoutProgramStudiInput | PenggunaCreateOrConnectWithoutProgramStudiInput[]
    upsert?: PenggunaUpsertWithWhereUniqueWithoutProgramStudiInput | PenggunaUpsertWithWhereUniqueWithoutProgramStudiInput[]
    createMany?: PenggunaCreateManyProgramStudiInputEnvelope
    set?: PenggunaWhereUniqueInput | PenggunaWhereUniqueInput[]
    disconnect?: PenggunaWhereUniqueInput | PenggunaWhereUniqueInput[]
    delete?: PenggunaWhereUniqueInput | PenggunaWhereUniqueInput[]
    connect?: PenggunaWhereUniqueInput | PenggunaWhereUniqueInput[]
    update?: PenggunaUpdateWithWhereUniqueWithoutProgramStudiInput | PenggunaUpdateWithWhereUniqueWithoutProgramStudiInput[]
    updateMany?: PenggunaUpdateManyWithWhereWithoutProgramStudiInput | PenggunaUpdateManyWithWhereWithoutProgramStudiInput[]
    deleteMany?: PenggunaScalarWhereInput | PenggunaScalarWhereInput[]
  }

  export type ProgramStudiFieldUpdateManyWithoutProgramStudiNestedInput = {
    create?: XOR<ProgramStudiFieldCreateWithoutProgramStudiInput, ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput> | ProgramStudiFieldCreateWithoutProgramStudiInput[] | ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: ProgramStudiFieldCreateOrConnectWithoutProgramStudiInput | ProgramStudiFieldCreateOrConnectWithoutProgramStudiInput[]
    upsert?: ProgramStudiFieldUpsertWithWhereUniqueWithoutProgramStudiInput | ProgramStudiFieldUpsertWithWhereUniqueWithoutProgramStudiInput[]
    createMany?: ProgramStudiFieldCreateManyProgramStudiInputEnvelope
    set?: ProgramStudiFieldWhereUniqueInput | ProgramStudiFieldWhereUniqueInput[]
    disconnect?: ProgramStudiFieldWhereUniqueInput | ProgramStudiFieldWhereUniqueInput[]
    delete?: ProgramStudiFieldWhereUniqueInput | ProgramStudiFieldWhereUniqueInput[]
    connect?: ProgramStudiFieldWhereUniqueInput | ProgramStudiFieldWhereUniqueInput[]
    update?: ProgramStudiFieldUpdateWithWhereUniqueWithoutProgramStudiInput | ProgramStudiFieldUpdateWithWhereUniqueWithoutProgramStudiInput[]
    updateMany?: ProgramStudiFieldUpdateManyWithWhereWithoutProgramStudiInput | ProgramStudiFieldUpdateManyWithWhereWithoutProgramStudiInput[]
    deleteMany?: ProgramStudiFieldScalarWhereInput | ProgramStudiFieldScalarWhereInput[]
  }

  export type MataKuliahUpdateManyWithoutProgramStudiNestedInput = {
    create?: XOR<MataKuliahCreateWithoutProgramStudiInput, MataKuliahUncheckedCreateWithoutProgramStudiInput> | MataKuliahCreateWithoutProgramStudiInput[] | MataKuliahUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: MataKuliahCreateOrConnectWithoutProgramStudiInput | MataKuliahCreateOrConnectWithoutProgramStudiInput[]
    upsert?: MataKuliahUpsertWithWhereUniqueWithoutProgramStudiInput | MataKuliahUpsertWithWhereUniqueWithoutProgramStudiInput[]
    createMany?: MataKuliahCreateManyProgramStudiInputEnvelope
    set?: MataKuliahWhereUniqueInput | MataKuliahWhereUniqueInput[]
    disconnect?: MataKuliahWhereUniqueInput | MataKuliahWhereUniqueInput[]
    delete?: MataKuliahWhereUniqueInput | MataKuliahWhereUniqueInput[]
    connect?: MataKuliahWhereUniqueInput | MataKuliahWhereUniqueInput[]
    update?: MataKuliahUpdateWithWhereUniqueWithoutProgramStudiInput | MataKuliahUpdateWithWhereUniqueWithoutProgramStudiInput[]
    updateMany?: MataKuliahUpdateManyWithWhereWithoutProgramStudiInput | MataKuliahUpdateManyWithWhereWithoutProgramStudiInput[]
    deleteMany?: MataKuliahScalarWhereInput | MataKuliahScalarWhereInput[]
  }

  export type PenggunaUncheckedUpdateManyWithoutProgramStudiNestedInput = {
    create?: XOR<PenggunaCreateWithoutProgramStudiInput, PenggunaUncheckedCreateWithoutProgramStudiInput> | PenggunaCreateWithoutProgramStudiInput[] | PenggunaUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: PenggunaCreateOrConnectWithoutProgramStudiInput | PenggunaCreateOrConnectWithoutProgramStudiInput[]
    upsert?: PenggunaUpsertWithWhereUniqueWithoutProgramStudiInput | PenggunaUpsertWithWhereUniqueWithoutProgramStudiInput[]
    createMany?: PenggunaCreateManyProgramStudiInputEnvelope
    set?: PenggunaWhereUniqueInput | PenggunaWhereUniqueInput[]
    disconnect?: PenggunaWhereUniqueInput | PenggunaWhereUniqueInput[]
    delete?: PenggunaWhereUniqueInput | PenggunaWhereUniqueInput[]
    connect?: PenggunaWhereUniqueInput | PenggunaWhereUniqueInput[]
    update?: PenggunaUpdateWithWhereUniqueWithoutProgramStudiInput | PenggunaUpdateWithWhereUniqueWithoutProgramStudiInput[]
    updateMany?: PenggunaUpdateManyWithWhereWithoutProgramStudiInput | PenggunaUpdateManyWithWhereWithoutProgramStudiInput[]
    deleteMany?: PenggunaScalarWhereInput | PenggunaScalarWhereInput[]
  }

  export type ProgramStudiFieldUncheckedUpdateManyWithoutProgramStudiNestedInput = {
    create?: XOR<ProgramStudiFieldCreateWithoutProgramStudiInput, ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput> | ProgramStudiFieldCreateWithoutProgramStudiInput[] | ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: ProgramStudiFieldCreateOrConnectWithoutProgramStudiInput | ProgramStudiFieldCreateOrConnectWithoutProgramStudiInput[]
    upsert?: ProgramStudiFieldUpsertWithWhereUniqueWithoutProgramStudiInput | ProgramStudiFieldUpsertWithWhereUniqueWithoutProgramStudiInput[]
    createMany?: ProgramStudiFieldCreateManyProgramStudiInputEnvelope
    set?: ProgramStudiFieldWhereUniqueInput | ProgramStudiFieldWhereUniqueInput[]
    disconnect?: ProgramStudiFieldWhereUniqueInput | ProgramStudiFieldWhereUniqueInput[]
    delete?: ProgramStudiFieldWhereUniqueInput | ProgramStudiFieldWhereUniqueInput[]
    connect?: ProgramStudiFieldWhereUniqueInput | ProgramStudiFieldWhereUniqueInput[]
    update?: ProgramStudiFieldUpdateWithWhereUniqueWithoutProgramStudiInput | ProgramStudiFieldUpdateWithWhereUniqueWithoutProgramStudiInput[]
    updateMany?: ProgramStudiFieldUpdateManyWithWhereWithoutProgramStudiInput | ProgramStudiFieldUpdateManyWithWhereWithoutProgramStudiInput[]
    deleteMany?: ProgramStudiFieldScalarWhereInput | ProgramStudiFieldScalarWhereInput[]
  }

  export type MataKuliahUncheckedUpdateManyWithoutProgramStudiNestedInput = {
    create?: XOR<MataKuliahCreateWithoutProgramStudiInput, MataKuliahUncheckedCreateWithoutProgramStudiInput> | MataKuliahCreateWithoutProgramStudiInput[] | MataKuliahUncheckedCreateWithoutProgramStudiInput[]
    connectOrCreate?: MataKuliahCreateOrConnectWithoutProgramStudiInput | MataKuliahCreateOrConnectWithoutProgramStudiInput[]
    upsert?: MataKuliahUpsertWithWhereUniqueWithoutProgramStudiInput | MataKuliahUpsertWithWhereUniqueWithoutProgramStudiInput[]
    createMany?: MataKuliahCreateManyProgramStudiInputEnvelope
    set?: MataKuliahWhereUniqueInput | MataKuliahWhereUniqueInput[]
    disconnect?: MataKuliahWhereUniqueInput | MataKuliahWhereUniqueInput[]
    delete?: MataKuliahWhereUniqueInput | MataKuliahWhereUniqueInput[]
    connect?: MataKuliahWhereUniqueInput | MataKuliahWhereUniqueInput[]
    update?: MataKuliahUpdateWithWhereUniqueWithoutProgramStudiInput | MataKuliahUpdateWithWhereUniqueWithoutProgramStudiInput[]
    updateMany?: MataKuliahUpdateManyWithWhereWithoutProgramStudiInput | MataKuliahUpdateManyWithWhereWithoutProgramStudiInput[]
    deleteMany?: MataKuliahScalarWhereInput | MataKuliahScalarWhereInput[]
  }

  export type ProgramStudiCreateNestedOneWithoutFieldsInput = {
    create?: XOR<ProgramStudiCreateWithoutFieldsInput, ProgramStudiUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: ProgramStudiCreateOrConnectWithoutFieldsInput
    connect?: ProgramStudiWhereUniqueInput
  }

  export type ProgramStudiUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<ProgramStudiCreateWithoutFieldsInput, ProgramStudiUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: ProgramStudiCreateOrConnectWithoutFieldsInput
    upsert?: ProgramStudiUpsertWithoutFieldsInput
    connect?: ProgramStudiWhereUniqueInput
    update?: XOR<XOR<ProgramStudiUpdateToOneWithWhereWithoutFieldsInput, ProgramStudiUpdateWithoutFieldsInput>, ProgramStudiUncheckedUpdateWithoutFieldsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MahasiswaCreateWithoutPenggunaInput = {
    id?: string
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logbook?: LogbookCreateNestedManyWithoutMahasiswaInput
    pembimbing?: DosenCreateNestedOneWithoutMahasiswaBimbinganInput
    permohonanBimbingan?: PermohonanBimbinganCreateNestedManyWithoutMahasiswaInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutPenggunaInput = {
    id?: string
    pembimbingId?: string | null
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logbook?: LogbookUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutPenggunaInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutPenggunaInput, MahasiswaUncheckedCreateWithoutPenggunaInput>
  }

  export type DosenCreateWithoutPenggunaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswaBimbingan?: MahasiswaCreateNestedManyWithoutPembimbingInput
    permohonanBimbingan?: PermohonanBimbinganCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutPenggunaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswaBimbingan?: MahasiswaUncheckedCreateNestedManyWithoutPembimbingInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutPenggunaInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutPenggunaInput, DosenUncheckedCreateWithoutPenggunaInput>
  }

  export type NotifikasiCreateWithoutPenggunaInput = {
    id?: string
    judul: string
    pesan: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotifikasiUncheckedCreateWithoutPenggunaInput = {
    id?: string
    judul: string
    pesan: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotifikasiCreateOrConnectWithoutPenggunaInput = {
    where: NotifikasiWhereUniqueInput
    create: XOR<NotifikasiCreateWithoutPenggunaInput, NotifikasiUncheckedCreateWithoutPenggunaInput>
  }

  export type NotifikasiCreateManyPenggunaInputEnvelope = {
    data: NotifikasiCreateManyPenggunaInput | NotifikasiCreateManyPenggunaInput[]
    skipDuplicates?: boolean
  }

  export type LogbookCreateWithoutPenggunaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutLogbookInput
    kegiatan?: KegiatanCreateNestedManyWithoutLogbookInput
  }

  export type LogbookUncheckedCreateWithoutPenggunaInput = {
    id?: string
    mahasiswaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan?: KegiatanUncheckedCreateNestedManyWithoutLogbookInput
  }

  export type LogbookCreateOrConnectWithoutPenggunaInput = {
    where: LogbookWhereUniqueInput
    create: XOR<LogbookCreateWithoutPenggunaInput, LogbookUncheckedCreateWithoutPenggunaInput>
  }

  export type LogbookCreateManyPenggunaInputEnvelope = {
    data: LogbookCreateManyPenggunaInput | LogbookCreateManyPenggunaInput[]
    skipDuplicates?: boolean
  }

  export type ProgramStudiCreateWithoutPenggunaInput = {
    id?: string
    nama: string
    displayName: string
    templateSingleFieldForDate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: ProgramStudiFieldCreateNestedManyWithoutProgramStudiInput
    mataKuliah?: MataKuliahCreateNestedManyWithoutProgramStudiInput
  }

  export type ProgramStudiUncheckedCreateWithoutPenggunaInput = {
    id?: string
    nama: string
    displayName: string
    templateSingleFieldForDate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: ProgramStudiFieldUncheckedCreateNestedManyWithoutProgramStudiInput
    mataKuliah?: MataKuliahUncheckedCreateNestedManyWithoutProgramStudiInput
  }

  export type ProgramStudiCreateOrConnectWithoutPenggunaInput = {
    where: ProgramStudiWhereUniqueInput
    create: XOR<ProgramStudiCreateWithoutPenggunaInput, ProgramStudiUncheckedCreateWithoutPenggunaInput>
  }

  export type MahasiswaUpsertWithoutPenggunaInput = {
    update: XOR<MahasiswaUpdateWithoutPenggunaInput, MahasiswaUncheckedUpdateWithoutPenggunaInput>
    create: XOR<MahasiswaCreateWithoutPenggunaInput, MahasiswaUncheckedCreateWithoutPenggunaInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutPenggunaInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutPenggunaInput, MahasiswaUncheckedUpdateWithoutPenggunaInput>
  }

  export type MahasiswaUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logbook?: LogbookUpdateManyWithoutMahasiswaNestedInput
    pembimbing?: DosenUpdateOneWithoutMahasiswaBimbinganNestedInput
    permohonanBimbingan?: PermohonanBimbinganUpdateManyWithoutMahasiswaNestedInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logbook?: LogbookUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type DosenUpsertWithoutPenggunaInput = {
    update: XOR<DosenUpdateWithoutPenggunaInput, DosenUncheckedUpdateWithoutPenggunaInput>
    create: XOR<DosenCreateWithoutPenggunaInput, DosenUncheckedCreateWithoutPenggunaInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutPenggunaInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutPenggunaInput, DosenUncheckedUpdateWithoutPenggunaInput>
  }

  export type DosenUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswaBimbingan?: MahasiswaUpdateManyWithoutPembimbingNestedInput
    permohonanBimbingan?: PermohonanBimbinganUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswaBimbingan?: MahasiswaUncheckedUpdateManyWithoutPembimbingNestedInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type NotifikasiUpsertWithWhereUniqueWithoutPenggunaInput = {
    where: NotifikasiWhereUniqueInput
    update: XOR<NotifikasiUpdateWithoutPenggunaInput, NotifikasiUncheckedUpdateWithoutPenggunaInput>
    create: XOR<NotifikasiCreateWithoutPenggunaInput, NotifikasiUncheckedCreateWithoutPenggunaInput>
  }

  export type NotifikasiUpdateWithWhereUniqueWithoutPenggunaInput = {
    where: NotifikasiWhereUniqueInput
    data: XOR<NotifikasiUpdateWithoutPenggunaInput, NotifikasiUncheckedUpdateWithoutPenggunaInput>
  }

  export type NotifikasiUpdateManyWithWhereWithoutPenggunaInput = {
    where: NotifikasiScalarWhereInput
    data: XOR<NotifikasiUpdateManyMutationInput, NotifikasiUncheckedUpdateManyWithoutPenggunaInput>
  }

  export type NotifikasiScalarWhereInput = {
    AND?: NotifikasiScalarWhereInput | NotifikasiScalarWhereInput[]
    OR?: NotifikasiScalarWhereInput[]
    NOT?: NotifikasiScalarWhereInput | NotifikasiScalarWhereInput[]
    id?: StringFilter<"Notifikasi"> | string
    penggunaId?: StringFilter<"Notifikasi"> | string
    judul?: StringFilter<"Notifikasi"> | string
    pesan?: StringFilter<"Notifikasi"> | string
    isRead?: BoolFilter<"Notifikasi"> | boolean
    createdAt?: DateTimeFilter<"Notifikasi"> | Date | string
    updatedAt?: DateTimeFilter<"Notifikasi"> | Date | string
  }

  export type LogbookUpsertWithWhereUniqueWithoutPenggunaInput = {
    where: LogbookWhereUniqueInput
    update: XOR<LogbookUpdateWithoutPenggunaInput, LogbookUncheckedUpdateWithoutPenggunaInput>
    create: XOR<LogbookCreateWithoutPenggunaInput, LogbookUncheckedCreateWithoutPenggunaInput>
  }

  export type LogbookUpdateWithWhereUniqueWithoutPenggunaInput = {
    where: LogbookWhereUniqueInput
    data: XOR<LogbookUpdateWithoutPenggunaInput, LogbookUncheckedUpdateWithoutPenggunaInput>
  }

  export type LogbookUpdateManyWithWhereWithoutPenggunaInput = {
    where: LogbookScalarWhereInput
    data: XOR<LogbookUpdateManyMutationInput, LogbookUncheckedUpdateManyWithoutPenggunaInput>
  }

  export type LogbookScalarWhereInput = {
    AND?: LogbookScalarWhereInput | LogbookScalarWhereInput[]
    OR?: LogbookScalarWhereInput[]
    NOT?: LogbookScalarWhereInput | LogbookScalarWhereInput[]
    id?: StringFilter<"Logbook"> | string
    mahasiswaId?: StringFilter<"Logbook"> | string
    createdAt?: DateTimeFilter<"Logbook"> | Date | string
    updatedAt?: DateTimeFilter<"Logbook"> | Date | string
    penggunaId?: StringNullableFilter<"Logbook"> | string | null
  }

  export type ProgramStudiUpsertWithoutPenggunaInput = {
    update: XOR<ProgramStudiUpdateWithoutPenggunaInput, ProgramStudiUncheckedUpdateWithoutPenggunaInput>
    create: XOR<ProgramStudiCreateWithoutPenggunaInput, ProgramStudiUncheckedCreateWithoutPenggunaInput>
    where?: ProgramStudiWhereInput
  }

  export type ProgramStudiUpdateToOneWithWhereWithoutPenggunaInput = {
    where?: ProgramStudiWhereInput
    data: XOR<ProgramStudiUpdateWithoutPenggunaInput, ProgramStudiUncheckedUpdateWithoutPenggunaInput>
  }

  export type ProgramStudiUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    templateSingleFieldForDate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: ProgramStudiFieldUpdateManyWithoutProgramStudiNestedInput
    mataKuliah?: MataKuliahUpdateManyWithoutProgramStudiNestedInput
  }

  export type ProgramStudiUncheckedUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    templateSingleFieldForDate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: ProgramStudiFieldUncheckedUpdateManyWithoutProgramStudiNestedInput
    mataKuliah?: MataKuliahUncheckedUpdateManyWithoutProgramStudiNestedInput
  }

  export type PenggunaCreateWithoutMahasiswaInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dosen?: DosenCreateNestedOneWithoutPenggunaInput
    notifikasi?: NotifikasiCreateNestedManyWithoutPenggunaInput
    logbook?: LogbookCreateNestedManyWithoutPenggunaInput
    programStudi: ProgramStudiCreateNestedOneWithoutPenggunaInput
  }

  export type PenggunaUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    programStudiId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dosen?: DosenUncheckedCreateNestedOneWithoutPenggunaInput
    notifikasi?: NotifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    logbook?: LogbookUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaCreateOrConnectWithoutMahasiswaInput = {
    where: PenggunaWhereUniqueInput
    create: XOR<PenggunaCreateWithoutMahasiswaInput, PenggunaUncheckedCreateWithoutMahasiswaInput>
  }

  export type LogbookCreateWithoutMahasiswaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan?: KegiatanCreateNestedManyWithoutLogbookInput
    Pengguna?: PenggunaCreateNestedOneWithoutLogbookInput
  }

  export type LogbookUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    penggunaId?: string | null
    kegiatan?: KegiatanUncheckedCreateNestedManyWithoutLogbookInput
  }

  export type LogbookCreateOrConnectWithoutMahasiswaInput = {
    where: LogbookWhereUniqueInput
    create: XOR<LogbookCreateWithoutMahasiswaInput, LogbookUncheckedCreateWithoutMahasiswaInput>
  }

  export type LogbookCreateManyMahasiswaInputEnvelope = {
    data: LogbookCreateManyMahasiswaInput | LogbookCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type DosenCreateWithoutMahasiswaBimbinganInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutDosenInput
    permohonanBimbingan?: PermohonanBimbinganCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutMahasiswaBimbinganInput = {
    id?: string
    penggunaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permohonanBimbingan?: PermohonanBimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutMahasiswaBimbinganInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutMahasiswaBimbinganInput, DosenUncheckedCreateWithoutMahasiswaBimbinganInput>
  }

  export type PermohonanBimbinganCreateWithoutMahasiswaInput = {
    id?: string
    status?: string
    pesan?: string | null
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dosen: DosenCreateNestedOneWithoutPermohonanBimbinganInput
  }

  export type PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    dosenId: string
    status?: string
    pesan?: string | null
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermohonanBimbinganCreateOrConnectWithoutMahasiswaInput = {
    where: PermohonanBimbinganWhereUniqueInput
    create: XOR<PermohonanBimbinganCreateWithoutMahasiswaInput, PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput>
  }

  export type PermohonanBimbinganCreateManyMahasiswaInputEnvelope = {
    data: PermohonanBimbinganCreateManyMahasiswaInput | PermohonanBimbinganCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput = {
    id?: string
    alasan: string
    pembimbingIdLama?: string | null
    promotorIdLama?: string | null
    koPromotorIdLama?: string | null
    pembimbingIdBaru?: string | null
    promotorIdBaru?: string | null
    koPromotorIdBaru?: string | null
    changedAt?: Date | string
  }

  export type RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    alasan: string
    pembimbingIdLama?: string | null
    promotorIdLama?: string | null
    koPromotorIdLama?: string | null
    pembimbingIdBaru?: string | null
    promotorIdBaru?: string | null
    koPromotorIdBaru?: string | null
    changedAt?: Date | string
  }

  export type RiwayatPerubahanPembimbingCreateOrConnectWithoutMahasiswaInput = {
    where: RiwayatPerubahanPembimbingWhereUniqueInput
    create: XOR<RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput, RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput>
  }

  export type RiwayatPerubahanPembimbingCreateManyMahasiswaInputEnvelope = {
    data: RiwayatPerubahanPembimbingCreateManyMahasiswaInput | RiwayatPerubahanPembimbingCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type PenggunaUpsertWithoutMahasiswaInput = {
    update: XOR<PenggunaUpdateWithoutMahasiswaInput, PenggunaUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<PenggunaCreateWithoutMahasiswaInput, PenggunaUncheckedCreateWithoutMahasiswaInput>
    where?: PenggunaWhereInput
  }

  export type PenggunaUpdateToOneWithWhereWithoutMahasiswaInput = {
    where?: PenggunaWhereInput
    data: XOR<PenggunaUpdateWithoutMahasiswaInput, PenggunaUncheckedUpdateWithoutMahasiswaInput>
  }

  export type PenggunaUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: DosenUpdateOneWithoutPenggunaNestedInput
    notifikasi?: NotifikasiUpdateManyWithoutPenggunaNestedInput
    logbook?: LogbookUpdateManyWithoutPenggunaNestedInput
    programStudi?: ProgramStudiUpdateOneRequiredWithoutPenggunaNestedInput
  }

  export type PenggunaUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    programStudiId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: DosenUncheckedUpdateOneWithoutPenggunaNestedInput
    notifikasi?: NotifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    logbook?: LogbookUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type LogbookUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: LogbookWhereUniqueInput
    update: XOR<LogbookUpdateWithoutMahasiswaInput, LogbookUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<LogbookCreateWithoutMahasiswaInput, LogbookUncheckedCreateWithoutMahasiswaInput>
  }

  export type LogbookUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: LogbookWhereUniqueInput
    data: XOR<LogbookUpdateWithoutMahasiswaInput, LogbookUncheckedUpdateWithoutMahasiswaInput>
  }

  export type LogbookUpdateManyWithWhereWithoutMahasiswaInput = {
    where: LogbookScalarWhereInput
    data: XOR<LogbookUpdateManyMutationInput, LogbookUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type DosenUpsertWithoutMahasiswaBimbinganInput = {
    update: XOR<DosenUpdateWithoutMahasiswaBimbinganInput, DosenUncheckedUpdateWithoutMahasiswaBimbinganInput>
    create: XOR<DosenCreateWithoutMahasiswaBimbinganInput, DosenUncheckedCreateWithoutMahasiswaBimbinganInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutMahasiswaBimbinganInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutMahasiswaBimbinganInput, DosenUncheckedUpdateWithoutMahasiswaBimbinganInput>
  }

  export type DosenUpdateWithoutMahasiswaBimbinganInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutDosenNestedInput
    permohonanBimbingan?: PermohonanBimbinganUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutMahasiswaBimbinganInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permohonanBimbingan?: PermohonanBimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type PermohonanBimbinganUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: PermohonanBimbinganWhereUniqueInput
    update: XOR<PermohonanBimbinganUpdateWithoutMahasiswaInput, PermohonanBimbinganUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<PermohonanBimbinganCreateWithoutMahasiswaInput, PermohonanBimbinganUncheckedCreateWithoutMahasiswaInput>
  }

  export type PermohonanBimbinganUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: PermohonanBimbinganWhereUniqueInput
    data: XOR<PermohonanBimbinganUpdateWithoutMahasiswaInput, PermohonanBimbinganUncheckedUpdateWithoutMahasiswaInput>
  }

  export type PermohonanBimbinganUpdateManyWithWhereWithoutMahasiswaInput = {
    where: PermohonanBimbinganScalarWhereInput
    data: XOR<PermohonanBimbinganUpdateManyMutationInput, PermohonanBimbinganUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type PermohonanBimbinganScalarWhereInput = {
    AND?: PermohonanBimbinganScalarWhereInput | PermohonanBimbinganScalarWhereInput[]
    OR?: PermohonanBimbinganScalarWhereInput[]
    NOT?: PermohonanBimbinganScalarWhereInput | PermohonanBimbinganScalarWhereInput[]
    id?: StringFilter<"PermohonanBimbingan"> | string
    mahasiswaId?: StringFilter<"PermohonanBimbingan"> | string
    dosenId?: StringFilter<"PermohonanBimbingan"> | string
    status?: StringFilter<"PermohonanBimbingan"> | string
    pesan?: StringNullableFilter<"PermohonanBimbingan"> | string | null
    alasanDitolak?: StringNullableFilter<"PermohonanBimbingan"> | string | null
    createdAt?: DateTimeFilter<"PermohonanBimbingan"> | Date | string
    updatedAt?: DateTimeFilter<"PermohonanBimbingan"> | Date | string
  }

  export type RiwayatPerubahanPembimbingUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: RiwayatPerubahanPembimbingWhereUniqueInput
    update: XOR<RiwayatPerubahanPembimbingUpdateWithoutMahasiswaInput, RiwayatPerubahanPembimbingUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<RiwayatPerubahanPembimbingCreateWithoutMahasiswaInput, RiwayatPerubahanPembimbingUncheckedCreateWithoutMahasiswaInput>
  }

  export type RiwayatPerubahanPembimbingUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: RiwayatPerubahanPembimbingWhereUniqueInput
    data: XOR<RiwayatPerubahanPembimbingUpdateWithoutMahasiswaInput, RiwayatPerubahanPembimbingUncheckedUpdateWithoutMahasiswaInput>
  }

  export type RiwayatPerubahanPembimbingUpdateManyWithWhereWithoutMahasiswaInput = {
    where: RiwayatPerubahanPembimbingScalarWhereInput
    data: XOR<RiwayatPerubahanPembimbingUpdateManyMutationInput, RiwayatPerubahanPembimbingUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type RiwayatPerubahanPembimbingScalarWhereInput = {
    AND?: RiwayatPerubahanPembimbingScalarWhereInput | RiwayatPerubahanPembimbingScalarWhereInput[]
    OR?: RiwayatPerubahanPembimbingScalarWhereInput[]
    NOT?: RiwayatPerubahanPembimbingScalarWhereInput | RiwayatPerubahanPembimbingScalarWhereInput[]
    id?: StringFilter<"RiwayatPerubahanPembimbing"> | string
    mahasiswaId?: StringFilter<"RiwayatPerubahanPembimbing"> | string
    alasan?: StringFilter<"RiwayatPerubahanPembimbing"> | string
    pembimbingIdLama?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    promotorIdLama?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    koPromotorIdLama?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    pembimbingIdBaru?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    promotorIdBaru?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    koPromotorIdBaru?: StringNullableFilter<"RiwayatPerubahanPembimbing"> | string | null
    changedAt?: DateTimeFilter<"RiwayatPerubahanPembimbing"> | Date | string
  }

  export type PenggunaCreateWithoutDosenInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa?: MahasiswaCreateNestedOneWithoutPenggunaInput
    notifikasi?: NotifikasiCreateNestedManyWithoutPenggunaInput
    logbook?: LogbookCreateNestedManyWithoutPenggunaInput
    programStudi: ProgramStudiCreateNestedOneWithoutPenggunaInput
  }

  export type PenggunaUncheckedCreateWithoutDosenInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    programStudiId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa?: MahasiswaUncheckedCreateNestedOneWithoutPenggunaInput
    notifikasi?: NotifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    logbook?: LogbookUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaCreateOrConnectWithoutDosenInput = {
    where: PenggunaWhereUniqueInput
    create: XOR<PenggunaCreateWithoutDosenInput, PenggunaUncheckedCreateWithoutDosenInput>
  }

  export type MahasiswaCreateWithoutPembimbingInput = {
    id?: string
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutMahasiswaInput
    logbook?: LogbookCreateNestedManyWithoutMahasiswaInput
    permohonanBimbingan?: PermohonanBimbinganCreateNestedManyWithoutMahasiswaInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutPembimbingInput = {
    id?: string
    penggunaId: string
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logbook?: LogbookUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutPembimbingInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutPembimbingInput, MahasiswaUncheckedCreateWithoutPembimbingInput>
  }

  export type MahasiswaCreateManyPembimbingInputEnvelope = {
    data: MahasiswaCreateManyPembimbingInput | MahasiswaCreateManyPembimbingInput[]
    skipDuplicates?: boolean
  }

  export type PermohonanBimbinganCreateWithoutDosenInput = {
    id?: string
    status?: string
    pesan?: string | null
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutPermohonanBimbinganInput
  }

  export type PermohonanBimbinganUncheckedCreateWithoutDosenInput = {
    id?: string
    mahasiswaId: string
    status?: string
    pesan?: string | null
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermohonanBimbinganCreateOrConnectWithoutDosenInput = {
    where: PermohonanBimbinganWhereUniqueInput
    create: XOR<PermohonanBimbinganCreateWithoutDosenInput, PermohonanBimbinganUncheckedCreateWithoutDosenInput>
  }

  export type PermohonanBimbinganCreateManyDosenInputEnvelope = {
    data: PermohonanBimbinganCreateManyDosenInput | PermohonanBimbinganCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type PenggunaUpsertWithoutDosenInput = {
    update: XOR<PenggunaUpdateWithoutDosenInput, PenggunaUncheckedUpdateWithoutDosenInput>
    create: XOR<PenggunaCreateWithoutDosenInput, PenggunaUncheckedCreateWithoutDosenInput>
    where?: PenggunaWhereInput
  }

  export type PenggunaUpdateToOneWithWhereWithoutDosenInput = {
    where?: PenggunaWhereInput
    data: XOR<PenggunaUpdateWithoutDosenInput, PenggunaUncheckedUpdateWithoutDosenInput>
  }

  export type PenggunaUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneWithoutPenggunaNestedInput
    notifikasi?: NotifikasiUpdateManyWithoutPenggunaNestedInput
    logbook?: LogbookUpdateManyWithoutPenggunaNestedInput
    programStudi?: ProgramStudiUpdateOneRequiredWithoutPenggunaNestedInput
  }

  export type PenggunaUncheckedUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    programStudiId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUncheckedUpdateOneWithoutPenggunaNestedInput
    notifikasi?: NotifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    logbook?: LogbookUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type MahasiswaUpsertWithWhereUniqueWithoutPembimbingInput = {
    where: MahasiswaWhereUniqueInput
    update: XOR<MahasiswaUpdateWithoutPembimbingInput, MahasiswaUncheckedUpdateWithoutPembimbingInput>
    create: XOR<MahasiswaCreateWithoutPembimbingInput, MahasiswaUncheckedCreateWithoutPembimbingInput>
  }

  export type MahasiswaUpdateWithWhereUniqueWithoutPembimbingInput = {
    where: MahasiswaWhereUniqueInput
    data: XOR<MahasiswaUpdateWithoutPembimbingInput, MahasiswaUncheckedUpdateWithoutPembimbingInput>
  }

  export type MahasiswaUpdateManyWithWhereWithoutPembimbingInput = {
    where: MahasiswaScalarWhereInput
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyWithoutPembimbingInput>
  }

  export type MahasiswaScalarWhereInput = {
    AND?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
    OR?: MahasiswaScalarWhereInput[]
    NOT?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
    id?: StringFilter<"Mahasiswa"> | string
    penggunaId?: StringFilter<"Mahasiswa"> | string
    pembimbingId?: StringNullableFilter<"Mahasiswa"> | string | null
    semester?: IntNullableFilter<"Mahasiswa"> | number | null
    judulDisertasi?: StringNullableFilter<"Mahasiswa"> | string | null
    angkatan?: StringNullableFilter<"Mahasiswa"> | string | null
    tempatTanggalLahir?: StringNullableFilter<"Mahasiswa"> | string | null
    alamat?: StringNullableFilter<"Mahasiswa"> | string | null
    alamatKeluarga?: StringNullableFilter<"Mahasiswa"> | string | null
    tahunLulus?: StringNullableFilter<"Mahasiswa"> | string | null
    mulaiMasukPendidikan?: DateTimeNullableFilter<"Mahasiswa"> | Date | string | null
    pekerjaan?: StringNullableFilter<"Mahasiswa"> | string | null
    nomorTelpon?: StringNullableFilter<"Mahasiswa"> | string | null
    email?: StringNullableFilter<"Mahasiswa"> | string | null
    createdAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    updatedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
  }

  export type PermohonanBimbinganUpsertWithWhereUniqueWithoutDosenInput = {
    where: PermohonanBimbinganWhereUniqueInput
    update: XOR<PermohonanBimbinganUpdateWithoutDosenInput, PermohonanBimbinganUncheckedUpdateWithoutDosenInput>
    create: XOR<PermohonanBimbinganCreateWithoutDosenInput, PermohonanBimbinganUncheckedCreateWithoutDosenInput>
  }

  export type PermohonanBimbinganUpdateWithWhereUniqueWithoutDosenInput = {
    where: PermohonanBimbinganWhereUniqueInput
    data: XOR<PermohonanBimbinganUpdateWithoutDosenInput, PermohonanBimbinganUncheckedUpdateWithoutDosenInput>
  }

  export type PermohonanBimbinganUpdateManyWithWhereWithoutDosenInput = {
    where: PermohonanBimbinganScalarWhereInput
    data: XOR<PermohonanBimbinganUpdateManyMutationInput, PermohonanBimbinganUncheckedUpdateManyWithoutDosenInput>
  }

  export type MahasiswaCreateWithoutLogbookInput = {
    id?: string
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutMahasiswaInput
    pembimbing?: DosenCreateNestedOneWithoutMahasiswaBimbinganInput
    permohonanBimbingan?: PermohonanBimbinganCreateNestedManyWithoutMahasiswaInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutLogbookInput = {
    id?: string
    penggunaId: string
    pembimbingId?: string | null
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permohonanBimbingan?: PermohonanBimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutLogbookInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutLogbookInput, MahasiswaUncheckedCreateWithoutLogbookInput>
  }

  export type KegiatanCreateWithoutLogbookInput = {
    id?: string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    MataKuliah: MataKuliahCreateNestedOneWithoutKegiatanInput
    lampiran?: LampiranCreateNestedManyWithoutKegiatanInput
  }

  export type KegiatanUncheckedCreateWithoutLogbookInput = {
    id?: string
    mataKuliahId: number
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lampiran?: LampiranUncheckedCreateNestedManyWithoutKegiatanInput
  }

  export type KegiatanCreateOrConnectWithoutLogbookInput = {
    where: KegiatanWhereUniqueInput
    create: XOR<KegiatanCreateWithoutLogbookInput, KegiatanUncheckedCreateWithoutLogbookInput>
  }

  export type KegiatanCreateManyLogbookInputEnvelope = {
    data: KegiatanCreateManyLogbookInput | KegiatanCreateManyLogbookInput[]
    skipDuplicates?: boolean
  }

  export type PenggunaCreateWithoutLogbookInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa?: MahasiswaCreateNestedOneWithoutPenggunaInput
    dosen?: DosenCreateNestedOneWithoutPenggunaInput
    notifikasi?: NotifikasiCreateNestedManyWithoutPenggunaInput
    programStudi: ProgramStudiCreateNestedOneWithoutPenggunaInput
  }

  export type PenggunaUncheckedCreateWithoutLogbookInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    programStudiId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa?: MahasiswaUncheckedCreateNestedOneWithoutPenggunaInput
    dosen?: DosenUncheckedCreateNestedOneWithoutPenggunaInput
    notifikasi?: NotifikasiUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaCreateOrConnectWithoutLogbookInput = {
    where: PenggunaWhereUniqueInput
    create: XOR<PenggunaCreateWithoutLogbookInput, PenggunaUncheckedCreateWithoutLogbookInput>
  }

  export type MahasiswaUpsertWithoutLogbookInput = {
    update: XOR<MahasiswaUpdateWithoutLogbookInput, MahasiswaUncheckedUpdateWithoutLogbookInput>
    create: XOR<MahasiswaCreateWithoutLogbookInput, MahasiswaUncheckedCreateWithoutLogbookInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutLogbookInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutLogbookInput, MahasiswaUncheckedUpdateWithoutLogbookInput>
  }

  export type MahasiswaUpdateWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutMahasiswaNestedInput
    pembimbing?: DosenUpdateOneWithoutMahasiswaBimbinganNestedInput
    permohonanBimbingan?: PermohonanBimbinganUpdateManyWithoutMahasiswaNestedInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permohonanBimbingan?: PermohonanBimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type KegiatanUpsertWithWhereUniqueWithoutLogbookInput = {
    where: KegiatanWhereUniqueInput
    update: XOR<KegiatanUpdateWithoutLogbookInput, KegiatanUncheckedUpdateWithoutLogbookInput>
    create: XOR<KegiatanCreateWithoutLogbookInput, KegiatanUncheckedCreateWithoutLogbookInput>
  }

  export type KegiatanUpdateWithWhereUniqueWithoutLogbookInput = {
    where: KegiatanWhereUniqueInput
    data: XOR<KegiatanUpdateWithoutLogbookInput, KegiatanUncheckedUpdateWithoutLogbookInput>
  }

  export type KegiatanUpdateManyWithWhereWithoutLogbookInput = {
    where: KegiatanScalarWhereInput
    data: XOR<KegiatanUpdateManyMutationInput, KegiatanUncheckedUpdateManyWithoutLogbookInput>
  }

  export type KegiatanScalarWhereInput = {
    AND?: KegiatanScalarWhereInput | KegiatanScalarWhereInput[]
    OR?: KegiatanScalarWhereInput[]
    NOT?: KegiatanScalarWhereInput | KegiatanScalarWhereInput[]
    id?: StringFilter<"Kegiatan"> | string
    logbookId?: StringFilter<"Kegiatan"> | string
    mataKuliahId?: IntFilter<"Kegiatan"> | number
    fieldsData?: JsonNullableFilter<"Kegiatan">
    status?: StringFilter<"Kegiatan"> | string
    alasanDitolak?: StringNullableFilter<"Kegiatan"> | string | null
    createdAt?: DateTimeFilter<"Kegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"Kegiatan"> | Date | string
  }

  export type PenggunaUpsertWithoutLogbookInput = {
    update: XOR<PenggunaUpdateWithoutLogbookInput, PenggunaUncheckedUpdateWithoutLogbookInput>
    create: XOR<PenggunaCreateWithoutLogbookInput, PenggunaUncheckedCreateWithoutLogbookInput>
    where?: PenggunaWhereInput
  }

  export type PenggunaUpdateToOneWithWhereWithoutLogbookInput = {
    where?: PenggunaWhereInput
    data: XOR<PenggunaUpdateWithoutLogbookInput, PenggunaUncheckedUpdateWithoutLogbookInput>
  }

  export type PenggunaUpdateWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneWithoutPenggunaNestedInput
    dosen?: DosenUpdateOneWithoutPenggunaNestedInput
    notifikasi?: NotifikasiUpdateManyWithoutPenggunaNestedInput
    programStudi?: ProgramStudiUpdateOneRequiredWithoutPenggunaNestedInput
  }

  export type PenggunaUncheckedUpdateWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    programStudiId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUncheckedUpdateOneWithoutPenggunaNestedInput
    dosen?: DosenUncheckedUpdateOneWithoutPenggunaNestedInput
    notifikasi?: NotifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type MahasiswaCreateWithoutRiwayatPerubahanPembimbingInput = {
    id?: string
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutMahasiswaInput
    logbook?: LogbookCreateNestedManyWithoutMahasiswaInput
    pembimbing?: DosenCreateNestedOneWithoutMahasiswaBimbinganInput
    permohonanBimbingan?: PermohonanBimbinganCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutRiwayatPerubahanPembimbingInput = {
    id?: string
    penggunaId: string
    pembimbingId?: string | null
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logbook?: LogbookUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutRiwayatPerubahanPembimbingInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutRiwayatPerubahanPembimbingInput, MahasiswaUncheckedCreateWithoutRiwayatPerubahanPembimbingInput>
  }

  export type MahasiswaUpsertWithoutRiwayatPerubahanPembimbingInput = {
    update: XOR<MahasiswaUpdateWithoutRiwayatPerubahanPembimbingInput, MahasiswaUncheckedUpdateWithoutRiwayatPerubahanPembimbingInput>
    create: XOR<MahasiswaCreateWithoutRiwayatPerubahanPembimbingInput, MahasiswaUncheckedCreateWithoutRiwayatPerubahanPembimbingInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutRiwayatPerubahanPembimbingInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutRiwayatPerubahanPembimbingInput, MahasiswaUncheckedUpdateWithoutRiwayatPerubahanPembimbingInput>
  }

  export type MahasiswaUpdateWithoutRiwayatPerubahanPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutMahasiswaNestedInput
    logbook?: LogbookUpdateManyWithoutMahasiswaNestedInput
    pembimbing?: DosenUpdateOneWithoutMahasiswaBimbinganNestedInput
    permohonanBimbingan?: PermohonanBimbinganUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutRiwayatPerubahanPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logbook?: LogbookUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type LogbookCreateWithoutKegiatanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutLogbookInput
    Pengguna?: PenggunaCreateNestedOneWithoutLogbookInput
  }

  export type LogbookUncheckedCreateWithoutKegiatanInput = {
    id?: string
    mahasiswaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    penggunaId?: string | null
  }

  export type LogbookCreateOrConnectWithoutKegiatanInput = {
    where: LogbookWhereUniqueInput
    create: XOR<LogbookCreateWithoutKegiatanInput, LogbookUncheckedCreateWithoutKegiatanInput>
  }

  export type MataKuliahCreateWithoutKegiatanInput = {
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ProgramStudi?: ProgramStudiCreateNestedOneWithoutMataKuliahInput
  }

  export type MataKuliahUncheckedCreateWithoutKegiatanInput = {
    id?: number
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
    programStudiId?: string | null
  }

  export type MataKuliahCreateOrConnectWithoutKegiatanInput = {
    where: MataKuliahWhereUniqueInput
    create: XOR<MataKuliahCreateWithoutKegiatanInput, MataKuliahUncheckedCreateWithoutKegiatanInput>
  }

  export type LampiranCreateWithoutKegiatanInput = {
    id?: string
    namaFile: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LampiranUncheckedCreateWithoutKegiatanInput = {
    id?: string
    namaFile: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LampiranCreateOrConnectWithoutKegiatanInput = {
    where: LampiranWhereUniqueInput
    create: XOR<LampiranCreateWithoutKegiatanInput, LampiranUncheckedCreateWithoutKegiatanInput>
  }

  export type LampiranCreateManyKegiatanInputEnvelope = {
    data: LampiranCreateManyKegiatanInput | LampiranCreateManyKegiatanInput[]
    skipDuplicates?: boolean
  }

  export type LogbookUpsertWithoutKegiatanInput = {
    update: XOR<LogbookUpdateWithoutKegiatanInput, LogbookUncheckedUpdateWithoutKegiatanInput>
    create: XOR<LogbookCreateWithoutKegiatanInput, LogbookUncheckedCreateWithoutKegiatanInput>
    where?: LogbookWhereInput
  }

  export type LogbookUpdateToOneWithWhereWithoutKegiatanInput = {
    where?: LogbookWhereInput
    data: XOR<LogbookUpdateWithoutKegiatanInput, LogbookUncheckedUpdateWithoutKegiatanInput>
  }

  export type LogbookUpdateWithoutKegiatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutLogbookNestedInput
    Pengguna?: PenggunaUpdateOneWithoutLogbookNestedInput
  }

  export type LogbookUncheckedUpdateWithoutKegiatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penggunaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MataKuliahUpsertWithoutKegiatanInput = {
    update: XOR<MataKuliahUpdateWithoutKegiatanInput, MataKuliahUncheckedUpdateWithoutKegiatanInput>
    create: XOR<MataKuliahCreateWithoutKegiatanInput, MataKuliahUncheckedCreateWithoutKegiatanInput>
    where?: MataKuliahWhereInput
  }

  export type MataKuliahUpdateToOneWithWhereWithoutKegiatanInput = {
    where?: MataKuliahWhereInput
    data: XOR<MataKuliahUpdateWithoutKegiatanInput, MataKuliahUncheckedUpdateWithoutKegiatanInput>
  }

  export type MataKuliahUpdateWithoutKegiatanInput = {
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProgramStudi?: ProgramStudiUpdateOneWithoutMataKuliahNestedInput
  }

  export type MataKuliahUncheckedUpdateWithoutKegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programStudiId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LampiranUpsertWithWhereUniqueWithoutKegiatanInput = {
    where: LampiranWhereUniqueInput
    update: XOR<LampiranUpdateWithoutKegiatanInput, LampiranUncheckedUpdateWithoutKegiatanInput>
    create: XOR<LampiranCreateWithoutKegiatanInput, LampiranUncheckedCreateWithoutKegiatanInput>
  }

  export type LampiranUpdateWithWhereUniqueWithoutKegiatanInput = {
    where: LampiranWhereUniqueInput
    data: XOR<LampiranUpdateWithoutKegiatanInput, LampiranUncheckedUpdateWithoutKegiatanInput>
  }

  export type LampiranUpdateManyWithWhereWithoutKegiatanInput = {
    where: LampiranScalarWhereInput
    data: XOR<LampiranUpdateManyMutationInput, LampiranUncheckedUpdateManyWithoutKegiatanInput>
  }

  export type LampiranScalarWhereInput = {
    AND?: LampiranScalarWhereInput | LampiranScalarWhereInput[]
    OR?: LampiranScalarWhereInput[]
    NOT?: LampiranScalarWhereInput | LampiranScalarWhereInput[]
    id?: StringFilter<"Lampiran"> | string
    kegiatanId?: StringFilter<"Lampiran"> | string
    namaFile?: StringFilter<"Lampiran"> | string
    url?: StringFilter<"Lampiran"> | string
    createdAt?: DateTimeFilter<"Lampiran"> | Date | string
    updatedAt?: DateTimeFilter<"Lampiran"> | Date | string
  }

  export type KegiatanCreateWithoutMataKuliahInput = {
    id?: string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logbook: LogbookCreateNestedOneWithoutKegiatanInput
    lampiran?: LampiranCreateNestedManyWithoutKegiatanInput
  }

  export type KegiatanUncheckedCreateWithoutMataKuliahInput = {
    id?: string
    logbookId: string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lampiran?: LampiranUncheckedCreateNestedManyWithoutKegiatanInput
  }

  export type KegiatanCreateOrConnectWithoutMataKuliahInput = {
    where: KegiatanWhereUniqueInput
    create: XOR<KegiatanCreateWithoutMataKuliahInput, KegiatanUncheckedCreateWithoutMataKuliahInput>
  }

  export type KegiatanCreateManyMataKuliahInputEnvelope = {
    data: KegiatanCreateManyMataKuliahInput | KegiatanCreateManyMataKuliahInput[]
    skipDuplicates?: boolean
  }

  export type ProgramStudiCreateWithoutMataKuliahInput = {
    id?: string
    nama: string
    displayName: string
    templateSingleFieldForDate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna?: PenggunaCreateNestedManyWithoutProgramStudiInput
    fields?: ProgramStudiFieldCreateNestedManyWithoutProgramStudiInput
  }

  export type ProgramStudiUncheckedCreateWithoutMataKuliahInput = {
    id?: string
    nama: string
    displayName: string
    templateSingleFieldForDate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna?: PenggunaUncheckedCreateNestedManyWithoutProgramStudiInput
    fields?: ProgramStudiFieldUncheckedCreateNestedManyWithoutProgramStudiInput
  }

  export type ProgramStudiCreateOrConnectWithoutMataKuliahInput = {
    where: ProgramStudiWhereUniqueInput
    create: XOR<ProgramStudiCreateWithoutMataKuliahInput, ProgramStudiUncheckedCreateWithoutMataKuliahInput>
  }

  export type KegiatanUpsertWithWhereUniqueWithoutMataKuliahInput = {
    where: KegiatanWhereUniqueInput
    update: XOR<KegiatanUpdateWithoutMataKuliahInput, KegiatanUncheckedUpdateWithoutMataKuliahInput>
    create: XOR<KegiatanCreateWithoutMataKuliahInput, KegiatanUncheckedCreateWithoutMataKuliahInput>
  }

  export type KegiatanUpdateWithWhereUniqueWithoutMataKuliahInput = {
    where: KegiatanWhereUniqueInput
    data: XOR<KegiatanUpdateWithoutMataKuliahInput, KegiatanUncheckedUpdateWithoutMataKuliahInput>
  }

  export type KegiatanUpdateManyWithWhereWithoutMataKuliahInput = {
    where: KegiatanScalarWhereInput
    data: XOR<KegiatanUpdateManyMutationInput, KegiatanUncheckedUpdateManyWithoutMataKuliahInput>
  }

  export type ProgramStudiUpsertWithoutMataKuliahInput = {
    update: XOR<ProgramStudiUpdateWithoutMataKuliahInput, ProgramStudiUncheckedUpdateWithoutMataKuliahInput>
    create: XOR<ProgramStudiCreateWithoutMataKuliahInput, ProgramStudiUncheckedCreateWithoutMataKuliahInput>
    where?: ProgramStudiWhereInput
  }

  export type ProgramStudiUpdateToOneWithWhereWithoutMataKuliahInput = {
    where?: ProgramStudiWhereInput
    data: XOR<ProgramStudiUpdateWithoutMataKuliahInput, ProgramStudiUncheckedUpdateWithoutMataKuliahInput>
  }

  export type ProgramStudiUpdateWithoutMataKuliahInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    templateSingleFieldForDate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateManyWithoutProgramStudiNestedInput
    fields?: ProgramStudiFieldUpdateManyWithoutProgramStudiNestedInput
  }

  export type ProgramStudiUncheckedUpdateWithoutMataKuliahInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    templateSingleFieldForDate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUncheckedUpdateManyWithoutProgramStudiNestedInput
    fields?: ProgramStudiFieldUncheckedUpdateManyWithoutProgramStudiNestedInput
  }

  export type KegiatanCreateWithoutLampiranInput = {
    id?: string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logbook: LogbookCreateNestedOneWithoutKegiatanInput
    MataKuliah: MataKuliahCreateNestedOneWithoutKegiatanInput
  }

  export type KegiatanUncheckedCreateWithoutLampiranInput = {
    id?: string
    logbookId: string
    mataKuliahId: number
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KegiatanCreateOrConnectWithoutLampiranInput = {
    where: KegiatanWhereUniqueInput
    create: XOR<KegiatanCreateWithoutLampiranInput, KegiatanUncheckedCreateWithoutLampiranInput>
  }

  export type KegiatanUpsertWithoutLampiranInput = {
    update: XOR<KegiatanUpdateWithoutLampiranInput, KegiatanUncheckedUpdateWithoutLampiranInput>
    create: XOR<KegiatanCreateWithoutLampiranInput, KegiatanUncheckedCreateWithoutLampiranInput>
    where?: KegiatanWhereInput
  }

  export type KegiatanUpdateToOneWithWhereWithoutLampiranInput = {
    where?: KegiatanWhereInput
    data: XOR<KegiatanUpdateWithoutLampiranInput, KegiatanUncheckedUpdateWithoutLampiranInput>
  }

  export type KegiatanUpdateWithoutLampiranInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logbook?: LogbookUpdateOneRequiredWithoutKegiatanNestedInput
    MataKuliah?: MataKuliahUpdateOneRequiredWithoutKegiatanNestedInput
  }

  export type KegiatanUncheckedUpdateWithoutLampiranInput = {
    id?: StringFieldUpdateOperationsInput | string
    logbookId?: StringFieldUpdateOperationsInput | string
    mataKuliahId?: IntFieldUpdateOperationsInput | number
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaCreateWithoutPermohonanBimbinganInput = {
    id?: string
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutMahasiswaInput
    logbook?: LogbookCreateNestedManyWithoutMahasiswaInput
    pembimbing?: DosenCreateNestedOneWithoutMahasiswaBimbinganInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutPermohonanBimbinganInput = {
    id?: string
    penggunaId: string
    pembimbingId?: string | null
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logbook?: LogbookUncheckedCreateNestedManyWithoutMahasiswaInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutPermohonanBimbinganInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutPermohonanBimbinganInput, MahasiswaUncheckedCreateWithoutPermohonanBimbinganInput>
  }

  export type DosenCreateWithoutPermohonanBimbinganInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutDosenInput
    mahasiswaBimbingan?: MahasiswaCreateNestedManyWithoutPembimbingInput
  }

  export type DosenUncheckedCreateWithoutPermohonanBimbinganInput = {
    id?: string
    penggunaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswaBimbingan?: MahasiswaUncheckedCreateNestedManyWithoutPembimbingInput
  }

  export type DosenCreateOrConnectWithoutPermohonanBimbinganInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutPermohonanBimbinganInput, DosenUncheckedCreateWithoutPermohonanBimbinganInput>
  }

  export type MahasiswaUpsertWithoutPermohonanBimbinganInput = {
    update: XOR<MahasiswaUpdateWithoutPermohonanBimbinganInput, MahasiswaUncheckedUpdateWithoutPermohonanBimbinganInput>
    create: XOR<MahasiswaCreateWithoutPermohonanBimbinganInput, MahasiswaUncheckedCreateWithoutPermohonanBimbinganInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutPermohonanBimbinganInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutPermohonanBimbinganInput, MahasiswaUncheckedUpdateWithoutPermohonanBimbinganInput>
  }

  export type MahasiswaUpdateWithoutPermohonanBimbinganInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutMahasiswaNestedInput
    logbook?: LogbookUpdateManyWithoutMahasiswaNestedInput
    pembimbing?: DosenUpdateOneWithoutMahasiswaBimbinganNestedInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutPermohonanBimbinganInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logbook?: LogbookUncheckedUpdateManyWithoutMahasiswaNestedInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type DosenUpsertWithoutPermohonanBimbinganInput = {
    update: XOR<DosenUpdateWithoutPermohonanBimbinganInput, DosenUncheckedUpdateWithoutPermohonanBimbinganInput>
    create: XOR<DosenCreateWithoutPermohonanBimbinganInput, DosenUncheckedCreateWithoutPermohonanBimbinganInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutPermohonanBimbinganInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutPermohonanBimbinganInput, DosenUncheckedUpdateWithoutPermohonanBimbinganInput>
  }

  export type DosenUpdateWithoutPermohonanBimbinganInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutDosenNestedInput
    mahasiswaBimbingan?: MahasiswaUpdateManyWithoutPembimbingNestedInput
  }

  export type DosenUncheckedUpdateWithoutPermohonanBimbinganInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswaBimbingan?: MahasiswaUncheckedUpdateManyWithoutPembimbingNestedInput
  }

  export type PenggunaCreateWithoutNotifikasiInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa?: MahasiswaCreateNestedOneWithoutPenggunaInput
    dosen?: DosenCreateNestedOneWithoutPenggunaInput
    logbook?: LogbookCreateNestedManyWithoutPenggunaInput
    programStudi: ProgramStudiCreateNestedOneWithoutPenggunaInput
  }

  export type PenggunaUncheckedCreateWithoutNotifikasiInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    programStudiId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa?: MahasiswaUncheckedCreateNestedOneWithoutPenggunaInput
    dosen?: DosenUncheckedCreateNestedOneWithoutPenggunaInput
    logbook?: LogbookUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaCreateOrConnectWithoutNotifikasiInput = {
    where: PenggunaWhereUniqueInput
    create: XOR<PenggunaCreateWithoutNotifikasiInput, PenggunaUncheckedCreateWithoutNotifikasiInput>
  }

  export type PenggunaUpsertWithoutNotifikasiInput = {
    update: XOR<PenggunaUpdateWithoutNotifikasiInput, PenggunaUncheckedUpdateWithoutNotifikasiInput>
    create: XOR<PenggunaCreateWithoutNotifikasiInput, PenggunaUncheckedCreateWithoutNotifikasiInput>
    where?: PenggunaWhereInput
  }

  export type PenggunaUpdateToOneWithWhereWithoutNotifikasiInput = {
    where?: PenggunaWhereInput
    data: XOR<PenggunaUpdateWithoutNotifikasiInput, PenggunaUncheckedUpdateWithoutNotifikasiInput>
  }

  export type PenggunaUpdateWithoutNotifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneWithoutPenggunaNestedInput
    dosen?: DosenUpdateOneWithoutPenggunaNestedInput
    logbook?: LogbookUpdateManyWithoutPenggunaNestedInput
    programStudi?: ProgramStudiUpdateOneRequiredWithoutPenggunaNestedInput
  }

  export type PenggunaUncheckedUpdateWithoutNotifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    programStudiId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUncheckedUpdateOneWithoutPenggunaNestedInput
    dosen?: DosenUncheckedUpdateOneWithoutPenggunaNestedInput
    logbook?: LogbookUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type PenggunaCreateWithoutProgramStudiInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa?: MahasiswaCreateNestedOneWithoutPenggunaInput
    dosen?: DosenCreateNestedOneWithoutPenggunaInput
    notifikasi?: NotifikasiCreateNestedManyWithoutPenggunaInput
    logbook?: LogbookCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaUncheckedCreateWithoutProgramStudiInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa?: MahasiswaUncheckedCreateNestedOneWithoutPenggunaInput
    dosen?: DosenUncheckedCreateNestedOneWithoutPenggunaInput
    notifikasi?: NotifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    logbook?: LogbookUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaCreateOrConnectWithoutProgramStudiInput = {
    where: PenggunaWhereUniqueInput
    create: XOR<PenggunaCreateWithoutProgramStudiInput, PenggunaUncheckedCreateWithoutProgramStudiInput>
  }

  export type PenggunaCreateManyProgramStudiInputEnvelope = {
    data: PenggunaCreateManyProgramStudiInput | PenggunaCreateManyProgramStudiInput[]
    skipDuplicates?: boolean
  }

  export type ProgramStudiFieldCreateWithoutProgramStudiInput = {
    id?: string
    fieldName: string
    fieldType: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput = {
    id?: string
    fieldName: string
    fieldType: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramStudiFieldCreateOrConnectWithoutProgramStudiInput = {
    where: ProgramStudiFieldWhereUniqueInput
    create: XOR<ProgramStudiFieldCreateWithoutProgramStudiInput, ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput>
  }

  export type ProgramStudiFieldCreateManyProgramStudiInputEnvelope = {
    data: ProgramStudiFieldCreateManyProgramStudiInput | ProgramStudiFieldCreateManyProgramStudiInput[]
    skipDuplicates?: boolean
  }

  export type MataKuliahCreateWithoutProgramStudiInput = {
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan?: KegiatanCreateNestedManyWithoutMataKuliahInput
  }

  export type MataKuliahUncheckedCreateWithoutProgramStudiInput = {
    id?: number
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan?: KegiatanUncheckedCreateNestedManyWithoutMataKuliahInput
  }

  export type MataKuliahCreateOrConnectWithoutProgramStudiInput = {
    where: MataKuliahWhereUniqueInput
    create: XOR<MataKuliahCreateWithoutProgramStudiInput, MataKuliahUncheckedCreateWithoutProgramStudiInput>
  }

  export type MataKuliahCreateManyProgramStudiInputEnvelope = {
    data: MataKuliahCreateManyProgramStudiInput | MataKuliahCreateManyProgramStudiInput[]
    skipDuplicates?: boolean
  }

  export type PenggunaUpsertWithWhereUniqueWithoutProgramStudiInput = {
    where: PenggunaWhereUniqueInput
    update: XOR<PenggunaUpdateWithoutProgramStudiInput, PenggunaUncheckedUpdateWithoutProgramStudiInput>
    create: XOR<PenggunaCreateWithoutProgramStudiInput, PenggunaUncheckedCreateWithoutProgramStudiInput>
  }

  export type PenggunaUpdateWithWhereUniqueWithoutProgramStudiInput = {
    where: PenggunaWhereUniqueInput
    data: XOR<PenggunaUpdateWithoutProgramStudiInput, PenggunaUncheckedUpdateWithoutProgramStudiInput>
  }

  export type PenggunaUpdateManyWithWhereWithoutProgramStudiInput = {
    where: PenggunaScalarWhereInput
    data: XOR<PenggunaUpdateManyMutationInput, PenggunaUncheckedUpdateManyWithoutProgramStudiInput>
  }

  export type PenggunaScalarWhereInput = {
    AND?: PenggunaScalarWhereInput | PenggunaScalarWhereInput[]
    OR?: PenggunaScalarWhereInput[]
    NOT?: PenggunaScalarWhereInput | PenggunaScalarWhereInput[]
    id?: StringFilter<"Pengguna"> | string
    nama?: StringFilter<"Pengguna"> | string
    username?: StringFilter<"Pengguna"> | string
    password?: StringFilter<"Pengguna"> | string
    peran?: StringFilter<"Pengguna"> | string
    avatar?: StringNullableFilter<"Pengguna"> | string | null
    programStudiId?: StringFilter<"Pengguna"> | string
    createdAt?: DateTimeFilter<"Pengguna"> | Date | string
    updatedAt?: DateTimeFilter<"Pengguna"> | Date | string
  }

  export type ProgramStudiFieldUpsertWithWhereUniqueWithoutProgramStudiInput = {
    where: ProgramStudiFieldWhereUniqueInput
    update: XOR<ProgramStudiFieldUpdateWithoutProgramStudiInput, ProgramStudiFieldUncheckedUpdateWithoutProgramStudiInput>
    create: XOR<ProgramStudiFieldCreateWithoutProgramStudiInput, ProgramStudiFieldUncheckedCreateWithoutProgramStudiInput>
  }

  export type ProgramStudiFieldUpdateWithWhereUniqueWithoutProgramStudiInput = {
    where: ProgramStudiFieldWhereUniqueInput
    data: XOR<ProgramStudiFieldUpdateWithoutProgramStudiInput, ProgramStudiFieldUncheckedUpdateWithoutProgramStudiInput>
  }

  export type ProgramStudiFieldUpdateManyWithWhereWithoutProgramStudiInput = {
    where: ProgramStudiFieldScalarWhereInput
    data: XOR<ProgramStudiFieldUpdateManyMutationInput, ProgramStudiFieldUncheckedUpdateManyWithoutProgramStudiInput>
  }

  export type ProgramStudiFieldScalarWhereInput = {
    AND?: ProgramStudiFieldScalarWhereInput | ProgramStudiFieldScalarWhereInput[]
    OR?: ProgramStudiFieldScalarWhereInput[]
    NOT?: ProgramStudiFieldScalarWhereInput | ProgramStudiFieldScalarWhereInput[]
    id?: StringFilter<"ProgramStudiField"> | string
    programStudiId?: StringFilter<"ProgramStudiField"> | string
    fieldName?: StringFilter<"ProgramStudiField"> | string
    fieldType?: StringFilter<"ProgramStudiField"> | string
    isRequired?: BoolFilter<"ProgramStudiField"> | boolean
    order?: IntFilter<"ProgramStudiField"> | number
    createdAt?: DateTimeFilter<"ProgramStudiField"> | Date | string
    updatedAt?: DateTimeFilter<"ProgramStudiField"> | Date | string
  }

  export type MataKuliahUpsertWithWhereUniqueWithoutProgramStudiInput = {
    where: MataKuliahWhereUniqueInput
    update: XOR<MataKuliahUpdateWithoutProgramStudiInput, MataKuliahUncheckedUpdateWithoutProgramStudiInput>
    create: XOR<MataKuliahCreateWithoutProgramStudiInput, MataKuliahUncheckedCreateWithoutProgramStudiInput>
  }

  export type MataKuliahUpdateWithWhereUniqueWithoutProgramStudiInput = {
    where: MataKuliahWhereUniqueInput
    data: XOR<MataKuliahUpdateWithoutProgramStudiInput, MataKuliahUncheckedUpdateWithoutProgramStudiInput>
  }

  export type MataKuliahUpdateManyWithWhereWithoutProgramStudiInput = {
    where: MataKuliahScalarWhereInput
    data: XOR<MataKuliahUpdateManyMutationInput, MataKuliahUncheckedUpdateManyWithoutProgramStudiInput>
  }

  export type MataKuliahScalarWhereInput = {
    AND?: MataKuliahScalarWhereInput | MataKuliahScalarWhereInput[]
    OR?: MataKuliahScalarWhereInput[]
    NOT?: MataKuliahScalarWhereInput | MataKuliahScalarWhereInput[]
    id?: IntFilter<"MataKuliah"> | number
    judul?: StringFilter<"MataKuliah"> | string
    semester?: IntFilter<"MataKuliah"> | number
    createdAt?: DateTimeFilter<"MataKuliah"> | Date | string
    updatedAt?: DateTimeFilter<"MataKuliah"> | Date | string
    programStudiId?: StringNullableFilter<"MataKuliah"> | string | null
  }

  export type ProgramStudiCreateWithoutFieldsInput = {
    id?: string
    nama: string
    displayName: string
    templateSingleFieldForDate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna?: PenggunaCreateNestedManyWithoutProgramStudiInput
    mataKuliah?: MataKuliahCreateNestedManyWithoutProgramStudiInput
  }

  export type ProgramStudiUncheckedCreateWithoutFieldsInput = {
    id?: string
    nama: string
    displayName: string
    templateSingleFieldForDate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna?: PenggunaUncheckedCreateNestedManyWithoutProgramStudiInput
    mataKuliah?: MataKuliahUncheckedCreateNestedManyWithoutProgramStudiInput
  }

  export type ProgramStudiCreateOrConnectWithoutFieldsInput = {
    where: ProgramStudiWhereUniqueInput
    create: XOR<ProgramStudiCreateWithoutFieldsInput, ProgramStudiUncheckedCreateWithoutFieldsInput>
  }

  export type ProgramStudiUpsertWithoutFieldsInput = {
    update: XOR<ProgramStudiUpdateWithoutFieldsInput, ProgramStudiUncheckedUpdateWithoutFieldsInput>
    create: XOR<ProgramStudiCreateWithoutFieldsInput, ProgramStudiUncheckedCreateWithoutFieldsInput>
    where?: ProgramStudiWhereInput
  }

  export type ProgramStudiUpdateToOneWithWhereWithoutFieldsInput = {
    where?: ProgramStudiWhereInput
    data: XOR<ProgramStudiUpdateWithoutFieldsInput, ProgramStudiUncheckedUpdateWithoutFieldsInput>
  }

  export type ProgramStudiUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    templateSingleFieldForDate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateManyWithoutProgramStudiNestedInput
    mataKuliah?: MataKuliahUpdateManyWithoutProgramStudiNestedInput
  }

  export type ProgramStudiUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    templateSingleFieldForDate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUncheckedUpdateManyWithoutProgramStudiNestedInput
    mataKuliah?: MataKuliahUncheckedUpdateManyWithoutProgramStudiNestedInput
  }

  export type NotifikasiCreateManyPenggunaInput = {
    id?: string
    judul: string
    pesan: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogbookCreateManyPenggunaInput = {
    id?: string
    mahasiswaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotifikasiUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiUncheckedUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiUncheckedUpdateManyWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogbookUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutLogbookNestedInput
    kegiatan?: KegiatanUpdateManyWithoutLogbookNestedInput
  }

  export type LogbookUncheckedUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: KegiatanUncheckedUpdateManyWithoutLogbookNestedInput
  }

  export type LogbookUncheckedUpdateManyWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogbookCreateManyMahasiswaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    penggunaId?: string | null
  }

  export type PermohonanBimbinganCreateManyMahasiswaInput = {
    id?: string
    dosenId: string
    status?: string
    pesan?: string | null
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiwayatPerubahanPembimbingCreateManyMahasiswaInput = {
    id?: string
    alasan: string
    pembimbingIdLama?: string | null
    promotorIdLama?: string | null
    koPromotorIdLama?: string | null
    pembimbingIdBaru?: string | null
    promotorIdBaru?: string | null
    koPromotorIdBaru?: string | null
    changedAt?: Date | string
  }

  export type LogbookUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: KegiatanUpdateManyWithoutLogbookNestedInput
    Pengguna?: PenggunaUpdateOneWithoutLogbookNestedInput
  }

  export type LogbookUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penggunaId?: NullableStringFieldUpdateOperationsInput | string | null
    kegiatan?: KegiatanUncheckedUpdateManyWithoutLogbookNestedInput
  }

  export type LogbookUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penggunaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermohonanBimbinganUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pesan?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: DosenUpdateOneRequiredWithoutPermohonanBimbinganNestedInput
  }

  export type PermohonanBimbinganUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosenId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pesan?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermohonanBimbinganUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosenId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pesan?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiwayatPerubahanPembimbingUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alasan?: StringFieldUpdateOperationsInput | string
    pembimbingIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiwayatPerubahanPembimbingUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alasan?: StringFieldUpdateOperationsInput | string
    pembimbingIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiwayatPerubahanPembimbingUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alasan?: StringFieldUpdateOperationsInput | string
    pembimbingIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdLama?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    promotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorIdBaru?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaCreateManyPembimbingInput = {
    id?: string
    penggunaId: string
    semester?: number | null
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermohonanBimbinganCreateManyDosenInput = {
    id?: string
    mahasiswaId: string
    status?: string
    pesan?: string | null
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaUpdateWithoutPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutMahasiswaNestedInput
    logbook?: LogbookUpdateManyWithoutMahasiswaNestedInput
    permohonanBimbingan?: PermohonanBimbinganUpdateManyWithoutMahasiswaNestedInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logbook?: LogbookUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonanBimbingan?: PermohonanBimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    RiwayatPerubahanPembimbing?: RiwayatPerubahanPembimbingUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateManyWithoutPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    penggunaId?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermohonanBimbinganUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pesan?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutPermohonanBimbinganNestedInput
  }

  export type PermohonanBimbinganUncheckedUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pesan?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermohonanBimbinganUncheckedUpdateManyWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pesan?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KegiatanCreateManyLogbookInput = {
    id?: string
    mataKuliahId: number
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KegiatanUpdateWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MataKuliah?: MataKuliahUpdateOneRequiredWithoutKegiatanNestedInput
    lampiran?: LampiranUpdateManyWithoutKegiatanNestedInput
  }

  export type KegiatanUncheckedUpdateWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataKuliahId?: IntFieldUpdateOperationsInput | number
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lampiran?: LampiranUncheckedUpdateManyWithoutKegiatanNestedInput
  }

  export type KegiatanUncheckedUpdateManyWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataKuliahId?: IntFieldUpdateOperationsInput | number
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampiranCreateManyKegiatanInput = {
    id?: string
    namaFile: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LampiranUpdateWithoutKegiatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampiranUncheckedUpdateWithoutKegiatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampiranUncheckedUpdateManyWithoutKegiatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KegiatanCreateManyMataKuliahInput = {
    id?: string
    logbookId: string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KegiatanUpdateWithoutMataKuliahInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logbook?: LogbookUpdateOneRequiredWithoutKegiatanNestedInput
    lampiran?: LampiranUpdateManyWithoutKegiatanNestedInput
  }

  export type KegiatanUncheckedUpdateWithoutMataKuliahInput = {
    id?: StringFieldUpdateOperationsInput | string
    logbookId?: StringFieldUpdateOperationsInput | string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lampiran?: LampiranUncheckedUpdateManyWithoutKegiatanNestedInput
  }

  export type KegiatanUncheckedUpdateManyWithoutMataKuliahInput = {
    id?: StringFieldUpdateOperationsInput | string
    logbookId?: StringFieldUpdateOperationsInput | string
    fieldsData?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenggunaCreateManyProgramStudiInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramStudiFieldCreateManyProgramStudiInput = {
    id?: string
    fieldName: string
    fieldType: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MataKuliahCreateManyProgramStudiInput = {
    id?: number
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenggunaUpdateWithoutProgramStudiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneWithoutPenggunaNestedInput
    dosen?: DosenUpdateOneWithoutPenggunaNestedInput
    notifikasi?: NotifikasiUpdateManyWithoutPenggunaNestedInput
    logbook?: LogbookUpdateManyWithoutPenggunaNestedInput
  }

  export type PenggunaUncheckedUpdateWithoutProgramStudiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUncheckedUpdateOneWithoutPenggunaNestedInput
    dosen?: DosenUncheckedUpdateOneWithoutPenggunaNestedInput
    notifikasi?: NotifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    logbook?: LogbookUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type PenggunaUncheckedUpdateManyWithoutProgramStudiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramStudiFieldUpdateWithoutProgramStudiInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramStudiFieldUncheckedUpdateWithoutProgramStudiInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramStudiFieldUncheckedUpdateManyWithoutProgramStudiInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MataKuliahUpdateWithoutProgramStudiInput = {
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: KegiatanUpdateManyWithoutMataKuliahNestedInput
  }

  export type MataKuliahUncheckedUpdateWithoutProgramStudiInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: KegiatanUncheckedUpdateManyWithoutMataKuliahNestedInput
  }

  export type MataKuliahUncheckedUpdateManyWithoutProgramStudiInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}