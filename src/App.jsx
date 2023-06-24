import { useEffect, useRef, useState } from "react";
import { api } from "./api";
import { ToastContainer, toast } from "react-toastify";
import TemplateMain from "./components/Template/Template";
import CardsList from "./components/MenuItems/CardsList/CardsList";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/OrdersCart/CartModal/Modal";
import {
  toastContentStyle,
  toastStyle,
} from "./styles/StylesToast/ToastStyles";
import theme from "./styles/theme";
import { BackdropModal } from "./components/OrdersCart/CartModal/BackdropModal";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalStatus, setModalStatus] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      toast.info("Carregando cardápio...", {
        autoClose: false,
        style: toastStyle,
        bodyStyle: toastContentStyle,
      });

      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
        toast.error("Erro ao carregar cardápio");
      } finally {
        setTimeout(() => {
          setLoading(false);
          toast.dismiss();
        }, 500);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalStatus(false);
      }
    };
    const handlePressEsc = (event) => {
      if (event.key === "Escape") {
        setModalStatus(false);
      }
    };

    if (modalStatus) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handlePressEsc);
    }
    return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
          document.removeEventListener("keydown", handlePressEsc);
        };
  }, [modalStatus]);

  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

 const selectedProduct = (selected) => {
    const existingProduct = itemsInCart.find((item) => item.id === selected.id);
    if (existingProduct) {
      toast.success(`Mais uma unidade de ${selected.name} adicionado`, {
        autoClose: 800,
        style: { color: `${theme.colors.feedback.success}` },
        bodyStyle: { color: `${theme.colors.feedback.success}` },
      });
      const updatedItems = itemsInCart.map((item) =>
        item.id === selected.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setItemsInCart(updatedItems);
    } else {
      toast.success(`${selected.name} adicionado ao carrinho`, {
        autoClose: 800,
        style: { color: `${theme.colors.feedback.success}` },
        bodyStyle: { color: `${theme.colors.feedback.success}` },
      });
      setItemsInCart([...itemsInCart, { ...selected, quantity: 1 }]);
    }
  };

  const onSearch = (keywords) => {
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(keywords.toLowerCase())
    );
    setFilteredItems(filterProducts);
  };
  const onDelete = (itemId) => {
    const existingItem = itemsInCart.find((item) => item.id === itemId);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        setItemsInCart(itemsInCart.filter((item) => item.id !== itemId));
      } else {
        const updatedItems = itemsInCart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
        setItemsInCart(updatedItems);
      }
    }
  };
  const totalUnits = itemsInCart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <TemplateMain
      itemCount={totalUnits}
      onSearch={onSearch}
      openModal={openModal}
    >
      <ToastContainer />
      {!loading && (
        <CardsList
          menuitems={products}
          selectedProduct={selectedProduct}
          filteredItems={filteredItems}
        />
      )}
      {modalStatus && (
        <>
          <BackdropModal closeModal={closeModal} />
          <Modal
            itemsInCart={itemsInCart}
            modalRef={modalRef}
            closeModal={closeModal}
            onDelete={onDelete}
            setItemsInCart={setItemsInCart}
          />
        </>
      )}
    </TemplateMain>
  );
}

export default App;
