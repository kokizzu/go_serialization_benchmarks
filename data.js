var data = [
	{
		"name": "gotiny",
		"marshal_iter_count": 2246960,
		"unmarshal_iter_count": 6504465,
		"total_iter_count": 8751425,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 450,
		"unmarshal_ns_op": 176,
		"total_ns_op": 626,
		"serialization_size": 47,
		"marshal_alloc_bytes": 168,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 200,
		"marshal_allocs": 5,
		"unmarshal_allocs": 2,
		"total_allocs": 7,
		"time_support": "unix-ns",
		"api_kind": "reflect",
		"url": "github.com/niubaoshu/gotiny",
		"notes": ""
	},
	{
		"name": "msgp",
		"marshal_iter_count": 8065608,
		"unmarshal_iter_count": 5599303,
		"total_iter_count": 13664911,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 143,
		"unmarshal_ns_op": 215,
		"total_ns_op": 358,
		"serialization_size": 97,
		"marshal_alloc_bytes": 128,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 160,
		"marshal_allocs": 1,
		"unmarshal_allocs": 2,
		"total_allocs": 3,
		"time_support": "fullrange",
		"api_kind": "codegen",
		"url": "github.com/tinylib/msgp",
		"notes": ""
	},
	{
		"name": "msgpack",
		"marshal_iter_count": 1210009,
		"unmarshal_iter_count": 1000000,
		"total_iter_count": 2210009,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 992,
		"unmarshal_ns_op": 1240,
		"total_ns_op": 2232,
		"serialization_size": 92,
		"marshal_alloc_bytes": 264,
		"unmarshal_alloc_bytes": 80,
		"total_alloc_bytes": 344,
		"marshal_allocs": 4,
		"unmarshal_allocs": 3,
		"total_allocs": 7,
		"time_support": "fullrange",
		"api_kind": "reflect",
		"url": "github.com/vmihailenco/msgpack",
		"notes": ""
	},
	{
		"name": "json",
		"marshal_iter_count": 811616,
		"unmarshal_iter_count": 325716,
		"total_iter_count": 1137332,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 1447,
		"unmarshal_ns_op": 3541,
		"total_ns_op": 4988,
		"serialization_size": 151,
		"marshal_alloc_bytes": 208,
		"unmarshal_alloc_bytes": 248,
		"total_alloc_bytes": 456,
		"marshal_allocs": 2,
		"unmarshal_allocs": 6,
		"total_allocs": 8,
		"time_support": "RFC3339ns",
		"api_kind": "reflect",
		"url": "pkg.go/dev/encoding/json",
		"notes": ""
	},
	{
		"name": "jsoniter",
		"marshal_iter_count": 1297754,
		"unmarshal_iter_count": 929462,
		"total_iter_count": 2227216,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 918,
		"unmarshal_ns_op": 1307,
		"total_ns_op": 2225,
		"serialization_size": 141,
		"marshal_alloc_bytes": 200,
		"unmarshal_alloc_bytes": 136,
		"total_alloc_bytes": 336,
		"marshal_allocs": 3,
		"unmarshal_allocs": 5,
		"total_allocs": 8,
		"time_support": "custom",
		"api_kind": "reflect",
		"url": "github.com/json-iterator/go",
		"notes": ""
	},
	{
		"name": "easyjson",
		"marshal_iter_count": 965746,
		"unmarshal_iter_count": 1000000,
		"total_iter_count": 1965746,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 1176,
		"unmarshal_ns_op": 1073,
		"total_ns_op": 2249,
		"serialization_size": 151,
		"marshal_alloc_bytes": 976,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 1008,
		"marshal_allocs": 7,
		"unmarshal_allocs": 2,
		"total_allocs": 9,
		"time_support": "unknown",
		"api_kind": "codegen",
		"url": "github.com/mailru/easyjson",
		"notes": ""
	},
	{
		"name": "bson",
		"marshal_iter_count": 375661,
		"unmarshal_iter_count": 627021,
		"total_iter_count": 1002682,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 2766,
		"unmarshal_ns_op": 1921,
		"total_ns_op": 4687,
		"serialization_size": 110,
		"marshal_alloc_bytes": 376,
		"unmarshal_alloc_bytes": 144,
		"total_alloc_bytes": 520,
		"marshal_allocs": 10,
		"unmarshal_allocs": 18,
		"total_allocs": 28,
		"time_support": "unix-ms",
		"api_kind": "reflect",
		"url": "gopkg.in/mgo.v2/bson",
		"notes": ""
	},
	{
		"name": "mongobson",
		"marshal_iter_count": 709714,
		"unmarshal_iter_count": 616824,
		"total_iter_count": 1326538,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 1637,
		"unmarshal_ns_op": 1857,
		"total_ns_op": 3494,
		"serialization_size": 110,
		"marshal_alloc_bytes": 240,
		"unmarshal_alloc_bytes": 328,
		"total_alloc_bytes": 568,
		"marshal_allocs": 9,
		"unmarshal_allocs": 14,
		"total_allocs": 23,
		"time_support": "unix-ms",
		"api_kind": "reflect",
		"url": "go.mongodb.org/mongo-driver/mongo",
		"notes": ""
	},
	{
		"name": "gob",
		"marshal_iter_count": 196543,
		"unmarshal_iter_count": 40824,
		"total_iter_count": 237367,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 5930,
		"unmarshal_ns_op": 29622,
		"total_ns_op": 35552,
		"serialization_size": 172,
		"marshal_alloc_bytes": 1744,
		"unmarshal_alloc_bytes": 7656,
		"total_alloc_bytes": 9400,
		"marshal_allocs": 37,
		"unmarshal_allocs": 203,
		"total_allocs": 240,
		"time_support": "fulltzoffset",
		"api_kind": "reflect",
		"url": "pkg.go.dev/encoding/gob",
		"notes": ""
	},
	{
		"name": "davecgh/xdr",
		"marshal_iter_count": 752708,
		"unmarshal_iter_count": 1000000,
		"total_iter_count": 1752708,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 1558,
		"unmarshal_ns_op": 1191,
		"total_ns_op": 2749,
		"serialization_size": 92,
		"marshal_alloc_bytes": 392,
		"unmarshal_alloc_bytes": 151,
		"total_alloc_bytes": 543,
		"marshal_allocs": 20,
		"unmarshal_allocs": 10,
		"total_allocs": 30,
		"time_support": "RFC3339ns",
		"api_kind": "reflect",
		"url": "github.com/davecgh/go-xdr/xdr",
		"notes": ""
	},
	{
		"name": "ugorji/msgpack",
		"marshal_iter_count": 1000000,
		"unmarshal_iter_count": 928220,
		"total_iter_count": 1928220,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 1073,
		"unmarshal_ns_op": 1226,
		"total_ns_op": 2299,
		"serialization_size": 91,
		"marshal_alloc_bytes": 1240,
		"unmarshal_alloc_bytes": 608,
		"total_alloc_bytes": 1848,
		"marshal_allocs": 3,
		"unmarshal_allocs": 3,
		"total_allocs": 6,
		"time_support": "unknown",
		"api_kind": "reflect",
		"url": "github.com/ugorji/go/codec",
		"notes": ""
	},
	{
		"name": "ugorji/binc",
		"marshal_iter_count": 947761,
		"unmarshal_iter_count": 1000000,
		"total_iter_count": 1947761,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 1220,
		"unmarshal_ns_op": 1128,
		"total_ns_op": 2348,
		"serialization_size": 94,
		"marshal_alloc_bytes": 1256,
		"unmarshal_alloc_bytes": 672,
		"total_alloc_bytes": 1928,
		"marshal_allocs": 4,
		"unmarshal_allocs": 3,
		"total_allocs": 7,
		"time_support": "fulltzoffset",
		"api_kind": "reflect",
		"url": "github.com/ugorji/go/codec",
		"notes": ""
	},
	{
		"name": "sereal",
		"marshal_iter_count": 345529,
		"unmarshal_iter_count": 357453,
		"total_iter_count": 702982,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 3147,
		"unmarshal_ns_op": 3038,
		"total_ns_op": 6185,
		"serialization_size": 142,
		"marshal_alloc_bytes": 1104,
		"unmarshal_alloc_bytes": 896,
		"total_alloc_bytes": 2000,
		"marshal_allocs": 22,
		"unmarshal_allocs": 33,
		"total_allocs": 55,
		"time_support": "unknown",
		"api_kind": "reflect",
		"url": "github.com/Sereal/Sereal/Go/sereal",
		"notes": ""
	},
	{
		"name": "alecthomas/binary",
		"marshal_iter_count": 613990,
		"unmarshal_iter_count": 845469,
		"total_iter_count": 1459459,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 1722,
		"unmarshal_ns_op": 1388,
		"total_ns_op": 3110,
		"serialization_size": 61,
		"marshal_alloc_bytes": 360,
		"unmarshal_alloc_bytes": 240,
		"total_alloc_bytes": 600,
		"marshal_allocs": 27,
		"unmarshal_allocs": 19,
		"total_allocs": 46,
		"time_support": "no",
		"api_kind": "reflect",
		"url": "github.com/alecthomas/binary",
		"notes": ""
	},
	{
		"name": "flatbuffers",
		"marshal_iter_count": 1486569,
		"unmarshal_iter_count": 7354107,
		"total_iter_count": 8840676,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 803,
		"unmarshal_ns_op": 163,
		"total_ns_op": 966,
		"serialization_size": 95,
		"marshal_alloc_bytes": 376,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 408,
		"marshal_allocs": 10,
		"unmarshal_allocs": 2,
		"total_allocs": 12,
		"time_support": "no",
		"api_kind": "codegen",
		"url": "github.com/google/flatbuffers/go",
		"notes": ""
	},
	{
		"name": "capnproto",
		"marshal_iter_count": 424782,
		"unmarshal_iter_count": 2838612,
		"total_iter_count": 3263394,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 2430,
		"unmarshal_ns_op": 421,
		"total_ns_op": 2851,
		"serialization_size": 96,
		"marshal_alloc_bytes": 4392,
		"unmarshal_alloc_bytes": 112,
		"total_alloc_bytes": 4504,
		"marshal_allocs": 6,
		"unmarshal_allocs": 5,
		"total_allocs": 11,
		"time_support": "no",
		"api_kind": "codegen",
		"url": "github.com/glycerine/go-capnproto",
		"notes": ""
	},
	{
		"name": "hprose",
		"marshal_iter_count": 1000000,
		"unmarshal_iter_count": 1000000,
		"total_iter_count": 2000000,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 1748,
		"unmarshal_ns_op": 1613,
		"total_ns_op": 3361,
		"serialization_size": 85,
		"marshal_alloc_bytes": 412,
		"unmarshal_alloc_bytes": 223,
		"total_alloc_bytes": 635,
		"marshal_allocs": 8,
		"unmarshal_allocs": 9,
		"total_allocs": 17,
		"time_support": "custom",
		"api_kind": "manual",
		"url": "github.com/hprose/hprose-go/io",
		"notes": ""
	},
	{
		"name": "hprose2",
		"marshal_iter_count": 2844640,
		"unmarshal_iter_count": 2436789,
		"total_iter_count": 5281429,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 428,
		"unmarshal_ns_op": 486,
		"total_ns_op": 914,
		"serialization_size": 85,
		"marshal_alloc_bytes": 0,
		"unmarshal_alloc_bytes": 56,
		"total_alloc_bytes": 56,
		"marshal_allocs": 0,
		"unmarshal_allocs": 3,
		"total_allocs": 3,
		"time_support": "custom",
		"api_kind": "manual",
		"url": "github.com/hprose/hprose-golang/io",
		"notes": ""
	},
	{
		"name": "dedis/protobuf",
		"marshal_iter_count": 1638974,
		"unmarshal_iter_count": 1236328,
		"total_iter_count": 2875302,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 723,
		"unmarshal_ns_op": 960,
		"total_ns_op": 1683,
		"serialization_size": 52,
		"marshal_alloc_bytes": 144,
		"unmarshal_alloc_bytes": 104,
		"total_alloc_bytes": 248,
		"marshal_allocs": 7,
		"unmarshal_allocs": 9,
		"total_allocs": 16,
		"time_support": "unix-ns",
		"api_kind": "reflect",
		"url": "go.dedis.ch/protobuf",
		"notes": ""
	},
	{
		"name": "pulsar",
		"marshal_iter_count": 2002485,
		"unmarshal_iter_count": 2233466,
		"total_iter_count": 4235951,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 586,
		"unmarshal_ns_op": 542,
		"total_ns_op": 1128,
		"serialization_size": 51,
		"marshal_alloc_bytes": 304,
		"unmarshal_alloc_bytes": 160,
		"total_alloc_bytes": 464,
		"marshal_allocs": 7,
		"unmarshal_allocs": 6,
		"total_allocs": 13,
		"time_support": "no",
		"api_kind": "codegen",
		"url": "github.com/cosmos/cosmos-proto",
		"notes": ""
	},
	{
		"name": "gogo/protobuf",
		"marshal_iter_count": 9642632,
		"unmarshal_iter_count": 6536440,
		"total_iter_count": 16179072,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 121,
		"unmarshal_ns_op": 175,
		"total_ns_op": 296,
		"serialization_size": 53,
		"marshal_alloc_bytes": 64,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 96,
		"marshal_allocs": 1,
		"unmarshal_allocs": 2,
		"total_allocs": 3,
		"time_support": "no",
		"api_kind": "codegen",
		"url": "github.com/gogo/protobuf/proto",
		"notes": ""
	},
	{
		"name": "gogo/jsonpb",
		"marshal_iter_count": 96399,
		"unmarshal_iter_count": 76960,
		"total_iter_count": 173359,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 12081,
		"unmarshal_ns_op": 15879,
		"total_ns_op": 27960,
		"serialization_size": 125,
		"marshal_alloc_bytes": 2757,
		"unmarshal_alloc_bytes": 3161,
		"total_alloc_bytes": 5918,
		"marshal_allocs": 80,
		"unmarshal_allocs": 55,
		"total_allocs": 135,
		"time_support": "RFC3339ns",
		"api_kind": "codegen",
		"url": "github.com/gogo/protobuf/proto",
		"notes": ""
	},
	{
		"name": "colfer",
		"marshal_iter_count": 9149020,
		"unmarshal_iter_count": 8591299,
		"total_iter_count": 17740319,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 132,
		"unmarshal_ns_op": 140,
		"total_ns_op": 272,
		"serialization_size": 51,
		"marshal_alloc_bytes": 64,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 96,
		"marshal_allocs": 1,
		"unmarshal_allocs": 2,
		"total_allocs": 3,
		"time_support": "custom",
		"api_kind": "codegen",
		"url": "github.com/pascaldekloe/colfer",
		"notes": ""
	},
	{
		"name": "gencode",
		"marshal_iter_count": 10810418,
		"unmarshal_iter_count": 8970657,
		"total_iter_count": 19781075,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 107,
		"unmarshal_ns_op": 131,
		"total_ns_op": 238,
		"serialization_size": 53,
		"marshal_alloc_bytes": 16,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 48,
		"marshal_allocs": 1,
		"unmarshal_allocs": 2,
		"total_allocs": 3,
		"time_support": "fulltzoffset",
		"api_kind": "codegen",
		"url": "github.com/andyleap/gencode",
		"notes": ""
	},
	{
		"name": "gencode/unsafe",
		"marshal_iter_count": 25375959,
		"unmarshal_iter_count": 10561101,
		"total_iter_count": 35937060,
		"unsafe_string_unmarshal": true,
		"marshal_ns_op": 47,
		"unmarshal_ns_op": 113,
		"total_ns_op": 160,
		"serialization_size": 46,
		"marshal_alloc_bytes": 0,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 32,
		"marshal_allocs": 0,
		"unmarshal_allocs": 2,
		"total_allocs": 2,
		"time_support": "fulltzoffset",
		"api_kind": "codegen",
		"url": "github.com/andyleap/gencode",
		"notes": ""
	},
	{
		"name": "calmh/xdr",
		"marshal_iter_count": 7565384,
		"unmarshal_iter_count": 8036689,
		"total_iter_count": 15602073,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 154,
		"unmarshal_ns_op": 150,
		"total_ns_op": 304,
		"serialization_size": 60,
		"marshal_alloc_bytes": 64,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 96,
		"marshal_allocs": 1,
		"unmarshal_allocs": 2,
		"total_allocs": 3,
		"time_support": "no",
		"api_kind": "codegen",
		"url": "github.com/calmh/xdr",
		"notes": ""
	},
	{
		"name": "goavro",
		"marshal_iter_count": 558049,
		"unmarshal_iter_count": 219433,
		"total_iter_count": 777482,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 2129,
		"unmarshal_ns_op": 5215,
		"total_ns_op": 7344,
		"serialization_size": 47,
		"marshal_alloc_bytes": 584,
		"unmarshal_alloc_bytes": 2232,
		"total_alloc_bytes": 2816,
		"marshal_allocs": 18,
		"unmarshal_allocs": 52,
		"total_allocs": 70,
		"time_support": "no",
		"api_kind": "manual",
		"url": "gopkg.in/linkedin/goavro.v1",
		"notes": ""
	},
	{
		"name": "avro2/text",
		"marshal_iter_count": 362406,
		"unmarshal_iter_count": 364477,
		"total_iter_count": 726883,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 3282,
		"unmarshal_ns_op": 3169,
		"total_ns_op": 6451,
		"serialization_size": 133,
		"marshal_alloc_bytes": 1320,
		"unmarshal_alloc_bytes": 656,
		"total_alloc_bytes": 1976,
		"marshal_allocs": 20,
		"unmarshal_allocs": 30,
		"total_allocs": 50,
		"time_support": "no",
		"api_kind": "manual",
		"url": "github.com/linkedin/goavro",
		"notes": ""
	},
	{
		"name": "avro2/binary",
		"marshal_iter_count": 1246824,
		"unmarshal_iter_count": 1221428,
		"total_iter_count": 2468252,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 959,
		"unmarshal_ns_op": 978,
		"total_ns_op": 1937,
		"serialization_size": 47,
		"marshal_alloc_bytes": 464,
		"unmarshal_alloc_bytes": 464,
		"total_alloc_bytes": 928,
		"marshal_allocs": 9,
		"unmarshal_allocs": 10,
		"total_allocs": 19,
		"time_support": "no",
		"api_kind": "manual",
		"url": "github.com/linkedin/goavro",
		"notes": ""
	},
	{
		"name": "ikea",
		"marshal_iter_count": 1947909,
		"unmarshal_iter_count": 1653921,
		"total_iter_count": 3601830,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 615,
		"unmarshal_ns_op": 731,
		"total_ns_op": 1346,
		"serialization_size": 55,
		"marshal_alloc_bytes": 72,
		"unmarshal_alloc_bytes": 96,
		"total_alloc_bytes": 168,
		"marshal_allocs": 8,
		"unmarshal_allocs": 10,
		"total_allocs": 18,
		"time_support": "no",
		"api_kind": "manual",
		"url": "github.com/ikkerens/ikeapack",
		"notes": ""
	},
	{
		"name": "shamaton/msgpack/map",
		"marshal_iter_count": 1571336,
		"unmarshal_iter_count": 1707856,
		"total_iter_count": 3279192,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 761,
		"unmarshal_ns_op": 706,
		"total_ns_op": 1467,
		"serialization_size": 92,
		"marshal_alloc_bytes": 192,
		"unmarshal_alloc_bytes": 88,
		"total_alloc_bytes": 280,
		"marshal_allocs": 4,
		"unmarshal_allocs": 4,
		"total_allocs": 8,
		"time_support": "unknown",
		"api_kind": "reflect",
		"url": "github.com/shamaton/msgpack",
		"notes": ""
	},
	{
		"name": "shamaton/msgpack/array",
		"marshal_iter_count": 1828490,
		"unmarshal_iter_count": 2181315,
		"total_iter_count": 4009805,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 657,
		"unmarshal_ns_op": 551,
		"total_ns_op": 1208,
		"serialization_size": 50,
		"marshal_alloc_bytes": 160,
		"unmarshal_alloc_bytes": 88,
		"total_alloc_bytes": 248,
		"marshal_allocs": 4,
		"unmarshal_allocs": 4,
		"total_allocs": 8,
		"time_support": "unknown",
		"api_kind": "reflect",
		"url": "github.com/shamaton/msgpack",
		"notes": ""
	},
	{
		"name": "shamaton/msgpackgen/map",
		"marshal_iter_count": 4443798,
		"unmarshal_iter_count": 3049044,
		"total_iter_count": 7492842,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 265,
		"unmarshal_ns_op": 394,
		"total_ns_op": 659,
		"serialization_size": 92,
		"marshal_alloc_bytes": 176,
		"unmarshal_alloc_bytes": 112,
		"total_alloc_bytes": 288,
		"marshal_allocs": 2,
		"unmarshal_allocs": 3,
		"total_allocs": 5,
		"time_support": "unknown",
		"api_kind": "reflect",
		"url": "github.com/shamaton/msgpack",
		"notes": ""
	},
	{
		"name": "shamaton/msgpackgen/array",
		"marshal_iter_count": 5223513,
		"unmarshal_iter_count": 4951287,
		"total_iter_count": 10174800,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 226,
		"unmarshal_ns_op": 244,
		"total_ns_op": 470,
		"serialization_size": 50,
		"marshal_alloc_bytes": 144,
		"unmarshal_alloc_bytes": 112,
		"total_alloc_bytes": 256,
		"marshal_allocs": 2,
		"unmarshal_allocs": 3,
		"total_allocs": 5,
		"time_support": "unknown",
		"api_kind": "reflect",
		"url": "github.com/shamaton/msgpack",
		"notes": ""
	},
	{
		"name": "ssz",
		"marshal_iter_count": 296910,
		"unmarshal_iter_count": 422118,
		"total_iter_count": 719028,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 3871,
		"unmarshal_ns_op": 2682,
		"total_ns_op": 6553,
		"serialization_size": 55,
		"marshal_alloc_bytes": 416,
		"unmarshal_alloc_bytes": 264,
		"total_alloc_bytes": 680,
		"marshal_allocs": 45,
		"unmarshal_allocs": 27,
		"total_allocs": 72,
		"time_support": "no",
		"api_kind": "manual",
		"url": "github.com/prysmaticlabs/go-ssz",
		"notes": ""
	},
	{
		"name": "200sc/bebop",
		"marshal_iter_count": 25525424,
		"unmarshal_iter_count": 10196658,
		"total_iter_count": 35722082,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 48,
		"unmarshal_ns_op": 116,
		"total_ns_op": 164,
		"serialization_size": 55,
		"marshal_alloc_bytes": 0,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 32,
		"marshal_allocs": 0,
		"unmarshal_allocs": 2,
		"total_allocs": 2,
		"time_support": "custom",
		"api_kind": "codegen",
		"url": "github.com/200sc/bebop",
		"notes": "time.Time values are encoded with 100 nanosecond precision."
	},
	{
		"name": "wellquite/bebop",
		"marshal_iter_count": 22999501,
		"unmarshal_iter_count": 9357578,
		"total_iter_count": 32357079,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 55,
		"unmarshal_ns_op": 127,
		"total_ns_op": 182,
		"serialization_size": 55,
		"marshal_alloc_bytes": 0,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 32,
		"marshal_allocs": 0,
		"unmarshal_allocs": 2,
		"total_allocs": 2,
		"time_support": "custom",
		"api_kind": "codegen",
		"url": "wellquite.org/bebop",
		"notes": "time.Time values are encoded with 100 nanosecond precision."
	},
	{
		"name": "fastjson",
		"marshal_iter_count": 698758,
		"unmarshal_iter_count": 468676,
		"total_iter_count": 1167434,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 1644,
		"unmarshal_ns_op": 2189,
		"total_ns_op": 3833,
		"serialization_size": 133,
		"marshal_alloc_bytes": 1360,
		"unmarshal_alloc_bytes": 1800,
		"total_alloc_bytes": 3160,
		"marshal_allocs": 7,
		"unmarshal_allocs": 11,
		"total_allocs": 18,
		"time_support": "no",
		"api_kind": "manual",
		"url": "github.com/valyala/fastjson",
		"notes": ""
	},
	{
		"name": "benc",
		"marshal_iter_count": 14335579,
		"unmarshal_iter_count": 10264022,
		"total_iter_count": 24599601,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 82,
		"unmarshal_ns_op": 115,
		"total_ns_op": 197,
		"serialization_size": 51,
		"marshal_alloc_bytes": 64,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 96,
		"marshal_allocs": 1,
		"unmarshal_allocs": 2,
		"total_allocs": 3,
		"time_support": "no",
		"api_kind": "manual",
		"url": "github.com/deneonet/benc",
		"notes": ""
	},
	{
		"name": "benc/usafe",
		"marshal_iter_count": 13128310,
		"unmarshal_iter_count": 31974120,
		"total_iter_count": 45102430,
		"unsafe_string_unmarshal": true,
		"marshal_ns_op": 86,
		"unmarshal_ns_op": 40,
		"total_ns_op": 126,
		"serialization_size": 51,
		"marshal_alloc_bytes": 64,
		"unmarshal_alloc_bytes": 0,
		"total_alloc_bytes": 64,
		"marshal_allocs": 1,
		"unmarshal_allocs": 0,
		"total_allocs": 1,
		"time_support": "no",
		"api_kind": "manual",
		"url": "github.com/deneonet/benc",
		"notes": ""
	},
	{
		"name": "mus",
		"marshal_iter_count": 12037308,
		"unmarshal_iter_count": 7975964,
		"total_iter_count": 20013272,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 95,
		"unmarshal_ns_op": 148,
		"total_ns_op": 243,
		"serialization_size": 46,
		"marshal_alloc_bytes": 48,
		"unmarshal_alloc_bytes": 32,
		"total_alloc_bytes": 80,
		"marshal_allocs": 1,
		"unmarshal_allocs": 2,
		"total_allocs": 3,
		"time_support": "no",
		"api_kind": "manual",
		"url": "github.com/mus-format/mus-go",
		"notes": ""
	},
	{
		"name": "mus/unsafe",
		"marshal_iter_count": 12755682,
		"unmarshal_iter_count": 23950941,
		"total_iter_count": 36706623,
		"unsafe_string_unmarshal": false,
		"marshal_ns_op": 93,
		"unmarshal_ns_op": 52,
		"total_ns_op": 145,
		"serialization_size": 49,
		"marshal_alloc_bytes": 64,
		"unmarshal_alloc_bytes": 0,
		"total_alloc_bytes": 64,
		"marshal_allocs": 1,
		"unmarshal_allocs": 0,
		"total_allocs": 1,
		"time_support": "no",
		"api_kind": "manual",
		"url": "github.com/mus-format/mus-go",
		"notes": ""
	},
	{
		"name": "baseline",
		"marshal_iter_count": 30776964,
		"unmarshal_iter_count": 34022644,
		"total_iter_count": 64799608,
		"unsafe_string_unmarshal": true,
		"marshal_ns_op": 39,
		"unmarshal_ns_op": 30,
		"total_ns_op": 69,
		"serialization_size": 47,
		"marshal_alloc_bytes": 0,
		"unmarshal_alloc_bytes": 0,
		"total_alloc_bytes": 0,
		"marshal_allocs": 0,
		"unmarshal_allocs": 0,
		"total_allocs": 0,
		"time_support": "no",
		"api_kind": "manual",
		"url": "",
		"notes": "This is a manually written encoding, designed to be the fastest possible for this benchmark."
	},
	{
		"name": "fastape",
		"marshal_iter_count": 9787380,
		"unmarshal_iter_count": 24863469,
		"total_iter_count": 34650849,
		"unsafe_string_unmarshal": true,
		"marshal_ns_op": 119,
		"unmarshal_ns_op": 49,
		"total_ns_op": 168,
		"serialization_size": 55,
		"marshal_alloc_bytes": 64,
		"unmarshal_alloc_bytes": 0,
		"total_alloc_bytes": 64,
		"marshal_allocs": 1,
		"unmarshal_allocs": 0,
		"total_allocs": 1,
		"time_support": "unix-ns",
		"api_kind": "manual",
		"url": "github.com/nazarifard/fastape",
		"notes": ""
	}
];