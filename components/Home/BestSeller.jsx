import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cartSlice';
import { addToFavorite } from '../../store/reducers/favoriteSlice';
import { AiOutlineHeart } from 'react-icons/ai';
import { toastr } from 'react-redux-toastr';

const BestSeller = ({ bestSellers, loading, user }) => {
  const dispatch = useDispatch();

  // دالة لإضافة المنتج إلى سلة المشتريات
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    toastr.success('تمت إضافة المنتج إلى السلة');
  };

  // دالة لإضافة المنتج إلى المفضلة
  const addToFavoritesHandler = (product) => {
    if (user) {
      dispatch(addToFavorite(product));
      toastr.success('تمت إضافة المنتج إلى المفضلة');
    } else {
      toastr.error('يرجى تسجيل الدخول لإضافة المنتج إلى المفضلة');
    }
  };

  return (
    <div className="mt-5 w-full">
      {/* عنوان الأكثر مبيعاً */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-5 text-[var(--color-primary-day)]">
          الأكثر مبيعاً
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-[var(--color-secondary-day)]">
          منتجاتنا الأكثر شعبية
        </p>
      </div>

      {/* عرض المنتجات */}
      <div className="py-10 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[var(--color-background-day)] h-full border-2 rounded-md hover:shadow-md hover:scale-105 transition-all"
            >
              {loading ? (
                <div className="animate-pulse">
                  <div className="bg-gray-200 h-64 w-full"></div>
                  <div className="bg-gray-200 h-4 w-1/2 mt-2"></div>
                  <div className="bg-gray-200 h-4 w-1/4 mt-2"></div>
                  <div className="bg-gray-200 h-4 w-1/4 mt-2"></div>
                </div>
              ) : (
                <div className="flex flex-col items-center h-full">
                  {/* صورة المنتج */}
                  <Link
                    href={`/detail/${item.id}`}
                    className="relative w-full aspect-w-4 aspect-h-3"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                      placeholder="blur"
                      blurDataURL={item.image}
                      loading="lazy"
                      priority={item.isTopSeller}
                      quality={75}
                    />
                  </Link>

                  {/* تفاصيل المنتج */}
                  <div className="flex-grow flex flex-col items-center justify-center bg-[var(--color-component-background-day)] gap-2 text-center w-full p-2">
                    <h1 className="text-sm md:text-md font-semibold text-[var(--color-text-day)]">
                      {item.title}
                    </h1>
                    <p className="text-sm text-[var(--color-text-day)]">
                      {item.price} ج.م
                    </p>
                  </div>

                  {/* أزرار الإضافة للسلة والمفضلة */}
                  <div className="flex items-center mt-4 gap-2">
                    <button
                      onClick={() => addToCartHandler(item)}
                      className="bg-[var(--color-feature-button-day)] text-[var(--color-feature-text-day)] font-semibold text-sm px-4 py-2 rounded hover:bg-[var(--color-feature-button-hover-day)] transition-colors"
                    >
                      أضف إلى السلة
                    </button>
                    <button
                      onClick={() => addToFavoritesHandler(item)}
                      className="rounded-full w-10 h-10 bg-[var(--color-feature-button-day)] p-0 border-0 inline-flex items-center justify-center text-[var(--color-feature-text-day)] ml-2 hover:bg-[var(--color-feature-button-hover-day)] hover:text-white focus:outline-none"
                    >
                      <AiOutlineHeart size={24} />
                    </button>
                  </div>

                  {/* زر التفاصيل */}
                  <Link
                    className="flex items-center justify-end w-full h-12 mt-4"
                    href={`/detail/${item.id}`}
                  >
                    <button className="bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] w-full font-semibold text-sm px-4 py-2 hover:bg-[var(--color-button-hover-day)]">
                      تفاصيل
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
